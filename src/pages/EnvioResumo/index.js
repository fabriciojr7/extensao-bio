import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TitlePage from "../../components/TitlePage";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import FormGrouping from "../../components/FormGrouping";
import Button from "../../components/Button";
import formatCpf from "../../utils/formatCpf";
import useErrors from "../../hooks/useErrors";
import Loader from "../../components/Loader";
import { create } from "../../services/api";
import { Alert } from "../../utils/Alert";

import { Content, ContainerForm } from './styles'

export default function EnvioResumo() {
  const [cpf, setCpf] = useState('');
  const [titulo, setTitulo] = useState('');
  const [autores, setAutores] = useState('');
  const [filiacao, setFiliacao] = useState('');
  const [apoio, setApoio] = useState('');
  const [palavrasChave, setPalavrasChave] = useState('');
  const [resumo, setResumo] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { setError, removeError, getErrorsMEssageByFieldName } = useErrors();
  const navigate = useNavigate();

  const handleCpfChange = (e) => {
    setCpf(formatCpf(e.target.value));

    if (!e.target.value.trim()) {
      setError({ field: 'cpf', message: 'O cpf é obrigatório.' });
    } else {
      removeError('cpf')
    }
  }

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'titulo', message: 'O título é obrigatório.' });
    } else {
      removeError('titulo')
    }
  }

  const handleAutoresChange = (e) => {
    setAutores(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'autores', message: 'O(s) autor(es) é(são) obrigatório(s).' });
    } else {
      removeError('autores')
    }
  }

  const handleFiliacaoChange = (e) => {
    setFiliacao(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'filiacao', message: 'A filiação é obrigatória.' });
    } else {
      removeError('filiacao')
    }
  }

  const handlePalavrasChaveChange = (e) => {
    setPalavrasChave(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'palavrasChave', message: 'As palavras-chave são obrigatórias.' });
    } else {
      removeError('palavrasChave')
    }
  }

  const handleResumoChange = (e) => {
    setResumo(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'resumo', message: 'O resumo é obrigatório.' });
    } else {
      removeError('resumo')
    }
  }

  const checkFormValid = () => {
    let errors = true;
    if (!cpf.trim()) {
      setError({ field: 'cpf', message: 'O cpf é obrigatório.' });
      errors = false;
    }

    if (!titulo.trim()) {
      setError({ field: 'titulo', message: 'O título é obrigatório.' });
    }

    if (!autores.trim()) {
      setError({ field: 'autores', message: 'O(s) autor(es) é(são) obrigatório(s).' });
    }

    if (!filiacao.trim()) {
      setError({ field: 'filiacao', message: 'A filiação é obrigatória.' });
    }

    if (!palavrasChave.trim()) {
      setError({ field: 'palavrasChave', message: 'As palavras-chave são obrigatórias.' });
    }

    if (!resumo.trim()) {
      setError({ field: 'resumo', message: 'O resumo é obrigatório.' });
      errors = false;
    }

    return errors;
  }

  const handleSubmit = async () => {

    if (checkFormValid()) {
      try {
        setIsLoading(true);
        const dados = {
          pessoaCpf: cpf,
          titulo,
          autores,
          filiacao,
          apoio,
          palavrasChave,
          texto: resumo
        }

        await create('resumo', dados);

        Alert('Sucesso', 'Resumo enviado.');
        navigate('/');
      } catch (error) {
        const status = error.response.data
        Alert('Atenção', 'Erro ao enviar resumo: ' + status, 'error');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <TitlePage text='Envie seu resumo' />
      {isLoading && <Loader />}
      <Content>
        <form noValidate>
          <ContainerForm>
            <FormGrouping error={getErrorsMEssageByFieldName('cpf')}>
              <Input
                error={getErrorsMEssageByFieldName('cpf')}
                placeholder="CPF"
                value={cpf}
                onChange={handleCpfChange}
                maxLength={14}
                autoFocus
              />
            </FormGrouping>

            <FormGrouping error={getErrorsMEssageByFieldName('titulo')}>
              <Input
                error={getErrorsMEssageByFieldName('titulo')}
                placeholder="Título"
                value={titulo}
                onChange={handleTituloChange}
                maxLength={128}
              />
            </FormGrouping>

            <FormGrouping error={getErrorsMEssageByFieldName('autores')}>
              <Input
                error={getErrorsMEssageByFieldName('autores')}
                placeholder="Autores"
                value={autores}
                onChange={handleAutoresChange}
                maxLength={128}
              />
            </FormGrouping>

            <FormGrouping error={getErrorsMEssageByFieldName('filiacao')}>
              <Input
                error={getErrorsMEssageByFieldName('filiacao')}
                placeholder="Filiação"
                value={filiacao}
                onChange={handleFiliacaoChange}
                maxLength={128}
              />
            </FormGrouping>

            <FormGrouping>
              <Input
                placeholder="Apoio"
                value={apoio}
                onChange={(e) => setApoio(e.target.value)}
                maxLength={128}
              />
            </FormGrouping>

            <FormGrouping error={getErrorsMEssageByFieldName('palavrasChave')}>
              <Input
                error={getErrorsMEssageByFieldName('palavrasChave')}
                placeholder="Palavras-chave"
                value={palavrasChave}
                onChange={handlePalavrasChaveChange}
                maxLength={64}
              />
            </FormGrouping>
          </ContainerForm>

          <FormGrouping
            error={getErrorsMEssageByFieldName('resumo')}
          >
            <p>{resumo.length} / 1800</p>
            <TextArea
              error={getErrorsMEssageByFieldName('resumo')}
              placeholder="Coloque seu resumo aqui"
              value={resumo}
              onChange={handleResumoChange}
              maxLength={1800}
            />
          </FormGrouping>

          <ContainerForm>
            <FormGrouping>
              <Button
                type="button"
                onClick={() => handleSubmit()}
              >Enviar resumo</Button>
            </FormGrouping>
          </ContainerForm>
        </form>
      </Content>
    </>
  )
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import FormGrouping from "../../components/FormGrouping";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import TextArea from "../../components/TextArea";
import TitlePage from "../../components/TitlePage";
import useErrors from "../../hooks/useErrors";
import { create } from "../../services/api";
import { Alert } from "../../utils/Alert";
import formatCpf from "../../utils/formatCpf";

import { ContainerForm, Content } from './styles';

export default function EnvioResumo() {
  const [cpf, setCpf] = useState('');
  const [titulo, setTitulo] = useState('');
  const [autores, setAutores] = useState('');
  const [filiacao, setFiliacao] = useState('');
  const [apoio, setApoio] = useState('');
  const [palavrasChave, setPalavrasChave] = useState('');
  const [resumo, setResumo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [enviou, setEnviou] = useState(false);

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

  const handleApoioChange = (e) => {
    setApoio(e.target.value);
    removeError('apoio')
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
    } else {
      if (cpf.trim().length < 14) {
        setError({ field: 'cpf', message: 'Informe um cpf válido.' });
        errors = false;
      }
    }

    if (!titulo) {
      setError({ field: 'titulo', message: 'O título é obrigatório.' });
      errors = false;
    } else {
      if (titulo.trim().length < 3) {
        setError({ field: 'titulo', message: 'Título deve ter no mínimo 3 caracteres.' });
        errors = false;
      }
    }

    if (!autores.trim()) {
      setError({ field: 'autores', message: 'O(s) autor(es) é(são) obrigatório(s).' });
      errors = false;
    } else {
      if (autores.trim().length < 3) {
        setError({ field: 'autores', message: 'Autores deve ter no mínimo 3 caracteres.' });
        errors = false;
      }
    }

    if (!filiacao.trim()) {
      setError({ field: 'filiacao', message: 'A filiação é obrigatória.' });
      errors = false;
    } else {
      if (filiacao.trim().length < 3) {
        setError({ field: 'filiacao', message: 'Filiacao deve ter no mínimo 3 caracteres.' });
        errors = false;
      }
    }

    if (!palavrasChave.trim()) {
      setError({ field: 'palavrasChave', message: 'As palavras-chave são obrigatórias.' });
      errors = false;
    } else {
      if (palavrasChave.trim().length < 3) {
        setError({ field: 'palavrasChave', message: 'As palavras-chave devem ter no mínimo 3 caracteres.' });
        errors = false;
      }
    }

    if (apoio && apoio.trim().length < 3) {
      setError({ field: 'apoio', message: 'Apoio deve ter no mínimo 3 caracteres.' });
      errors = false;
    }

    if (!resumo.trim()) {
      setError({ field: 'resumo', message: 'O resumo é obrigatório.' });
      errors = false;
    } else {
      if (resumo.trim().length < 3) {
        setError({ field: 'resumo', message: 'Resumo deve ter no mínimo 3 caracteres.' });
        errors = false;
      }
    }

    return errors;
  }

  const handleSubmit = async () => {

    if (checkFormValid()) {
      try {
        setEnviou(true);
        setIsLoading(true);
        const dados = {
          alunoCpf: cpf,
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
        const status = error.response.data.message;
        const errors = error.response.data.errors;

        if (errors) {
          const cpfExists = errors.find(erro => {
            if (erro.message.indexOf('alunoCpf deve existir na tabela') !== -1) {
              return true;
            } else {
              return false;
            }
          });

          if (cpfExists) {
            Alert('Atenção', 'O cpf informado não está cadastrado, realize a inscrição para enviar o resumo.', 'warning');
          }
        } else {
          if (status.indexOf('Esse CPF já enviou o número máximo de Resumos') !== -1) {
            Alert('Atenção', status, 'warning');
          } else {
            Alert('Atenção', 'Erro ao enviar resumo, entre em contato com a organização.', 'error');
          }
        }
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
              <TextArea
                error={getErrorsMEssageByFieldName('autores')}
                placeholder="Autores"
                value={autores}
                onChange={handleAutoresChange}
                maxLength={512}
              />
            </FormGrouping>

            <FormGrouping error={getErrorsMEssageByFieldName('filiacao')}>
              <TextArea
                error={getErrorsMEssageByFieldName('filiacao')}
                placeholder="Filiação"
                value={filiacao}
                onChange={handleFiliacaoChange}
                maxLength={512}
              />
            </FormGrouping>

            <FormGrouping error={getErrorsMEssageByFieldName('apoio')}>
              <Input
                error={getErrorsMEssageByFieldName('apoio')}
                placeholder="Apoio"
                value={apoio}
                onChange={handleApoioChange}
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

          <p className="obs">
            Ao preencher os campos as palavras em itálico e ou sublinhadas, tais formatações não serão mantidas no banco de dados,
            porém não haverá prejuízo para a avaliação do seu resumo
          </p>
          <FormGrouping
            error={getErrorsMEssageByFieldName('resumo')}
          >
            <p>{resumo.length} / 1800</p>
            <TextArea
              className="texto"
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
                disabled={enviou}
              >Enviar resumo</Button>
            </FormGrouping>
          </ContainerForm>
        </form>
      </Content>
    </>
  )
}

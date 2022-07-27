import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TitlePage from "../../components/TitlePage";
import FormGrouping from "../../components/FormGrouping";
import Input from "../../components/Input";
import formatCpf from "../../utils/formatCpf";
import Button from "../../components/Button";
import useErrors from "../../hooks/useErrors";
import Loader from "../../components/Loader";
import { create } from "../../services/api";
import { Alert } from "../../utils/Alert";

import { Content } from './styles'

export default function Inscricao() {
  const [cpf, setCpf] = useState('');
  const [fone, setFone] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [curso, setCurso] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { setError, removeError, getErrorsMEssageByFieldName } = useErrors();
  const navigate = useNavigate();

  const handleNomeChange = (e) => {
    setNome(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'nome', message: 'O nome é obrigatório.' });
    } else {
      removeError('nome')
    }
  }

  const handleCpfChange = (e) => {
    setCpf(formatCpf(e.target.value));

    if (!e.target.value.trim()) {
      setError({ field: 'cpf', message: 'O cpf é obrigatório.' });
    } else {
      removeError('cpf')
    }
  }

  const handleFoneChange = (e) => {
    setFone(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'fone', message: 'O telefone é obrigatório.' });
    } else {
      removeError('fone')
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'email', message: 'O e-mail é obrigatório.' });
    } else {
      removeError('email')
    }
  }

  const handleInstituicaoChange = (e) => {
    setInstituicao(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'instituicao', message: 'A instituição é obrigatória.' });
    } else {
      removeError('instituicao')
    }
  }

  const handleCursoChange = (e) => {
    setCurso(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'curso', message: 'O curso é obrigatório.' });
    } else {
      removeError('curso')
    }
  }

  const handlePeriodoChange = (e) => {
    setPeriodo(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'periodo', message: 'O período é obrigatório.' });
    } else {
      removeError('periodo')
    }
  }

  const handleEscolaridadeChange = (e) => {
    setEscolaridade(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'escolaridade', message: 'A escolaridade é obrigatória.' });
    } else {
      removeError('escolaridade')
    }
  }

  const checkFormValid = () => {
    let errors = true;
    if (!cpf.trim()) {
      setError({ field: 'cpf', message: 'O cpf é obrigatório.' });
      errors = false;
    }

    if (!nome.trim()) {
      setError({ field: 'nome', message: 'O nome é obrigatório.' });
      errors = false;
    }

    if (!fone.trim()) {
      setError({ field: 'fone', message: 'O telefone é obrigatório.' });
      errors = false;
    }

    if (!email.trim()) {
      setError({ field: 'email', message: 'O e-mail é obrigatório.' });
      errors = false;
    }

    if (!instituicao.trim()) {
      setError({ field: 'instituicao', message: 'A instituição é obrigatória.' });
      errors = false;
    }

    if (!curso.trim()) {
      setError({ field: 'curso', message: 'O curso é obrigatório.' });
      errors = false;
    }

    if (!periodo.trim()) {
      setError({ field: 'periodo', message: 'O período é obrigatório.' });
      errors = false;
    }

    if (!escolaridade.trim()) {
      setError({ field: 'escolaridade', message: 'A escolaridade é obrigatória.' });
      errors = false;
    }

    return errors;
  }

  const handleSubmit = async () => {
    if (checkFormValid()) {
      try {
        setIsLoading(true);
        const dados = {
          cpf,
          nomeCompleto: nome,
          fone,
          email,
          instituicao,
          curso,
          periodo,
          escolaridade
        }

        await create('pessoa', dados);
        Alert('Sucesso', 'Inscrição efetuada, aproveite o evento.');
        navigate('/');
      } catch (error) {
        const status = error.response.data
        Alert('Atenção', 'Erro ao efetuar inscrição: ' + status, 'error');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <TitlePage text='Inscrição' />
      {isLoading && <Loader />}
      <Content>
        <form noValidate>
          <FormGrouping error={getErrorsMEssageByFieldName('nome')}>
            <Input
              error={getErrorsMEssageByFieldName('nome')}
              placeholder="Nome completo *"
              autoFocus
              value={nome}
              onChange={handleNomeChange}
              maxLength={64}
            />
          </FormGrouping>

          <FormGrouping error={getErrorsMEssageByFieldName('cpf')}>
            <Input
              error={getErrorsMEssageByFieldName('cpf')}
              placeholder="CPF *"
              value={cpf}
              onChange={handleCpfChange}
              maxLength={14}
            />
          </FormGrouping>

          <FormGrouping error={getErrorsMEssageByFieldName('fone')}>
            <Input
              error={getErrorsMEssageByFieldName('fone')}
              placeholder="Telefone *"
              value={fone}
              onChange={handleFoneChange}
              maxLength={20}
            />
          </FormGrouping>

          <FormGrouping eerror={getErrorsMEssageByFieldName('email')}>
            <Input
              error={getErrorsMEssageByFieldName('email')}
              placeholder="Seu melhor e-mail *"
              value={email}
              onChange={handleEmailChange}
              maxLength={64}
            />
          </FormGrouping>

          <FormGrouping error={getErrorsMEssageByFieldName('instituicao')}>
            <Input
              error={getErrorsMEssageByFieldName('instituicao')}
              placeholder="Instituição de ensino *"
              value={instituicao}
              onChange={handleInstituicaoChange}
              maxLength={64}
            />
          </FormGrouping>

          <FormGrouping error={getErrorsMEssageByFieldName('curso')}>
            <Input
              error={getErrorsMEssageByFieldName('curso')}
              placeholder="Curso *"
              value={curso}
              onChange={handleCursoChange}
              maxLength={64}
            />
          </FormGrouping>

          <FormGrouping error={getErrorsMEssageByFieldName('periodo')}>
            <Input
              error={getErrorsMEssageByFieldName('periodo')}
              placeholder="Período *"
              value={periodo}
              onChange={handlePeriodoChange}
              maxLength={12}
            />
          </FormGrouping>

          <FormGrouping error={getErrorsMEssageByFieldName('escolaridade')}>
            <Input
              error={getErrorsMEssageByFieldName('escolaridade')}
              placeholder="Escolaridade *"
              value={escolaridade}
              onChange={handleEscolaridadeChange}
              maxLength={32}
            />
          </FormGrouping>

          <FormGrouping>
            <Button
              type="button"
              onClick={handleSubmit}
            >Confirmar inscrição</Button>
          </FormGrouping>
        </form>

      </Content>
    </>
  )
}

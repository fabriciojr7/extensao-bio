import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";

import FormGrouping from "../../../components/FormGrouping";
import Input from "../../../components/Input";
import Loader from "../../../components/Loader";
import useErrors from "../../../hooks/useErrors";
import { getDados, update } from "../../../services/api";
import formatCpf from "../../../utils/formatCpf";
import formatPhone from "../../../utils/formatPhone";
import HeaderPage from "../components/HeaderPage";

import isEmailValid from "../../../utils/isEmailValid";
import { Content, Line } from "./styles";
import { Alert } from "../../../utils/Alert";

export default function EditParticipante() {
  const [cpf, setCpf] = useState('');
  const [fone, setFone] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [curso, setCurso] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { setError, removeError, getErrorsMEssageByFieldName } = useErrors();
  const { id } = useParams();

  useEffect(() => {
    async function getParticipante() {
      try {
        setIsLoading(true);
        const { data } = await getDados(`alunoId/${id}`);
        setNome(data.data.nome_completo);
        setCpf(data.data.cpf);
        setFone(data.data.fone);
        setEmail(data.data.email);
        setInstituicao(data.data.instituicao);
        setCurso(data.data.curso);
        setPeriodo(data.data.periodo);
        setEscolaridade(data.data.escolaridade);
      } catch {
        Alert('Atenção', 'Ocorreu um erro ao buscar o participante, entre em contato com a organização.', 'error');
      } finally {
        setIsLoading(false);
      }
    }

    getParticipante();
  }, [id]);

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
    setFone(formatPhone(e.target.value));

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
    } else {
      if (nome.trim().length < 3) {
        setError({ field: 'nome', message: 'O nome deve ter no mínimo 3 caracteres.' });
        errors = false;
      }
    }

    if (!fone.trim()) {
      setError({ field: 'fone', message: 'O telefone é obrigatório.' });
      errors = false;
    } else {
      if (fone.trim().length < 14) {
        setError({ field: 'fone', message: 'O telefone informado é inválido.' });
        errors = false;
      }
    }

    if (!email.trim()) {
      setError({ field: 'email', message: 'O e-mail é obrigatório.' });
      errors = false;
    } else {
      if (email && !isEmailValid(email.trim())) {
        setError({ field: 'email', message: 'O e-mail informado é inválido.' });
        errors = false;
      }
    }

    if (!instituicao.trim()) {
      setError({ field: 'instituicao', message: 'A instituição é obrigatória.' });
      errors = false;
    } else {
      if (instituicao.trim().length < 3) {
        setError({ field: 'instituicao', message: 'A instituição deve ter no mínimo 3 caracteres.' });
        errors = false;
      }
    }

    if (!curso.trim()) {
      setError({ field: 'curso', message: 'O curso é obrigatório.' });
      errors = false;
    } else {
      if (curso.trim().length < 3) {
        setError({ field: 'curso', message: 'O curso deve ter no mínimo 3 caracteres.' });
        errors = false;
      }
    }

    if (!periodo.trim()) {
      setError({ field: 'periodo', message: 'O período é obrigatório.' });
      errors = false;
    } else {
      if (periodo.trim().length < 3) {
        setError({ field: 'periodo', message: 'O período deve ter no mínimo 3 caracteres.' });
        errors = false;
      }
    }


    if (!escolaridade.trim()) {
      setError({ field: 'escolaridade', message: 'A escolaridade é obrigatória.' });
      errors = false;
    } else {
      if (escolaridade.trim().length < 3) {
        setError({ field: 'escolaridade', message: 'A escolaridade deve ter no mínimo 3 caracteres.' });
        errors = false;
      }
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

        await update(`aluno/${id}`, dados);
        Alert('Sucesso', `Os dados do participante ${nome} foram editados.`);
        navigate('/adm');
      } catch (error) {
        const status = error.response.data
        const cpfExists = status.errors.find(erro =>
          erro.message === 'cpf deve ser único, esse cpf já foi utilizado'
        );

        const emailExists = status.errors.find(erro =>
          erro.message === 'email deve ser único, esse email já foi utilizado'
        );
        if (cpfExists) {
          Alert('Atenção', cpfExists.message, 'warning');
        } else if (emailExists) {
          Alert('Atenção', emailExists.message, 'warning');
        } else {
          Alert('Atenção', 'Erro na edição, entre em contato com a organização', 'warning');
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <HeaderPage title='Editar dados do participante' />
      <Line />
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
              maxLength={15}
            />
          </FormGrouping>

          <FormGrouping error={getErrorsMEssageByFieldName('email')}>
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
            >Confirmar alterações</Button>
          </FormGrouping>

          <FormGrouping>
            <Button
              type="button"
              onClick={() => navigate('/adm')}
            >Retornar</Button>
          </FormGrouping>
        </form>
      </Content>
    </>
  )
}

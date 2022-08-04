import { useState } from "react";
import HeaderPage from "../components/HeaderPage"
import Input from "../../../components/Input";
import FormGrouping from "../../../components/FormGrouping";
import Button from "../../../components/Button";
import formatCpf from "../../../utils/formatCpf";
import { getDados, updateCampo } from "../../../services/api";
import Loader from "../../../components/Loader";
import { Alert, ConfirmeAlert } from "../../../utils/Alert";
import CronogramaPresencas from "../components/CronogramaPresencas";

import {
  Form, Line, ContentForm, ContentDados,
  ContentPresenca, LineContent, ContentEfetivacao
} from "./styles";

export default function Dashboard() {
  const [cpf, setCpf] = useState('');
  const [pessoa, setPessoa] = useState({});
  const [palestras, setPalestras] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setSetvisible] = useState(false);
  const [miniCursos, setMiniCursos] = useState([]);
  const [efetivado, setEfetivado] = useState(false);

  const getDadosParticipante = async () => {
    try {
      if (cpf.trim()) {
        if (cpf && cpf.length < 14) {
          Alert('Atenção', 'Informe um CPF válido.', 'warning');
          return;
        }
        setIsLoading(true);
        const { data } = await getDados(`presenca/${cpf}`);

        setPessoa({
          id: data.data[0].id,
          cpf_pessoa: data.data[0].cpf,
          nome: data.data[0].nome_completo,
          email: data.data[0].email,
          fone: data.data[0].fone,
          curso: data.data[0].curso,
          pagamento: data.data[0].pagamento
        });

        setMiniCursos([
          {
            id: 1,
            idPresenca: data.data[0].palestras[8].idPresenca,
            titulo: data.data[0].palestras[8].titulo,
            presente: data.data[0].palestras[8].presente
          },
          {
            id: 2,
            idPresenca: data.data[0].palestras[9].idPresenca,
            titulo: data.data[0].palestras[9].titulo,
            presente: data.data[0].palestras[9].presente
          },
          {
            id: 3,
            idPresenca: data.data[0].palestras[10].idPresenca,
            titulo: data.data[0].palestras[10].titulo,
            presente: data.data[0].palestras[10].presente
          },
          {
            id: 4,
            idPresenca: data.data[0].palestras[11].idPresenca,
            titulo: data.data[0].palestras[11].titulo,
            presente: data.data[0].palestras[11].presente
          },
          {
            id: 5,
            idPresenca: data.data[0].palestras[12].idPresenca,
            titulo: data.data[0].palestras[12].titulo,
            presente: data.data[0].palestras[12].presente
          },
          {
            id: 6,
            idPresenca: data.data[0].palestras[13].idPresenca,
            titulo: data.data[0].palestras[13].titulo,
            presente: data.data[0].palestras[13].presente
          }
        ]);

        setEfetivado(data.data[0].pagamento);
        setPalestras(data.data[0].palestras);
        setSetvisible(true);
      } else {
        Alert('Atenção', 'O CPF precisa ser informado', 'warning');
      }
    } catch (error) {
      const status = error.response.data
      if (status.message === 'E_ROW_NOT_FOUND: Row not found') {
        Alert('Atenção', 'Nenhum registro encontrado com esse CPF.', 'warning');
      } else {
        Alert('Atenção', 'Erro no servidor: ' + status, 'error');
      }
    } finally {
      setIsLoading(false);
    }
  }

  const handlePresenca = async (idPresenca, dado) => {
    try {
      await updateCampo(`presenca/${idPresenca}`, dado);
      getDadosParticipante();
    } catch (error) {
      Alert('Atenção', 'Erro ao registrar presença: ' + error, 'error');
    }
  }

  const handleEfetivarInscricao = async () => {
    try {
      setIsLoading(true);
      await updateCampo(`aluno/${pessoa.id}`, { 'pagamento': true });
      setEfetivado(true);
    } catch (error) {
      Alert('Atenção', 'Erro ao aceitar inscrição: ' + error, 'error');
    } finally {
      setIsLoading(false);
    }
  }

  const handleBuscaCpf = async (e) => {
    e.preventDefault();
    getDadosParticipante();
  }

  return (
    <>
      <HeaderPage title='Registro de presenças' />

      {isLoading && <Loader />}
      <Line />

      <ContentForm>
        <h2>Informe o CPF para buscar o participante</h2>

        <Form onSubmit={handleBuscaCpf}>
          <FormGrouping>
            <Input
              value={cpf}
              onChange={(e) => setCpf(formatCpf(e.target.value))}
              placeholder="Informe o cpf"
              autoFocus
              maxLength={14}
            />
          </FormGrouping>

          <FormGrouping>
            <Button type="submit">Buscar</Button>
          </FormGrouping>
        </Form>
      </ContentForm>

      <ContentPresenca isVisible={visible}>
        <ContentDados>
          <h1>Dados do participante</h1>
          <LineContent>
            <span>CPF:</span>
            <h2>
              {pessoa.cpf_pessoa}
            </h2>
          </LineContent>

          <LineContent>
            <span>Nome:</span>
            <h2>
              {pessoa.nome}
            </h2>
          </LineContent>

          <LineContent>
            <span>Curso:</span>
            <h2>
              {pessoa.curso}
            </h2>
          </LineContent>

          <LineContent>
            <span>E-mail:</span>
            <h2>
              {pessoa.email}
            </h2>
          </LineContent>

          <LineContent>
            <span>Telefone:</span>
            <h2>
              {pessoa.fone}
            </h2>
          </LineContent>

        </ContentDados>

        {efetivado ? (
          <CronogramaPresencas
            func={handlePresenca}
            palestras={palestras}
            miniCursos={miniCursos}
          />
        ) : (

          <ContentEfetivacao>
            <p>Para registrar as presenças do participante <span>{pessoa.nome}</span>, verifique
              se o pagamento foi realizado, e efetive a presença.
            </p>
            <Button
              // onClick={() => handleEfetivarInscricao()}

              onClick={() =>
                ConfirmeAlert({
                  titlePergunta: `Deseja efetivar a inscrição do participante ${pessoa.nome}`
                }, () => handleEfetivarInscricao())}
            >
              Efetivação de inscrição
            </Button>
          </ContentEfetivacao>
        )}
      </ContentPresenca>
    </>
  )
}

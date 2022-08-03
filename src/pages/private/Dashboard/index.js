import { useState } from "react";
import HeaderPage from "../components/HeaderPage"
import Input from "../../../components/Input";
import FormGrouping from "../../../components/FormGrouping";
import Button from "../../../components/Button";
import formatCpf from "../../../utils/formatCpf";
import { getDados, updateCampo } from "../../../services/api";
import Loader from "../../../components/Loader";
import { Alert } from "../../../utils/Alert";
import CronogramaPresencas from "../components/CronogramaPresencas";

import {
  Form, Line, ContentForm, ContentDados,
  ContentPresenca, LineContent
} from "./styles";

export default function Dashboard() {
  const [cpf, setCpf] = useState('');
  const [pessoa, setPessoa] = useState({});
  const [preseca, setPresenca] = useState({});
  const [palestras, setPalestras] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setSetvisible] = useState(false);
  const [miniCursos, setMiniCursos] = useState([]);

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
        setPresenca({
          palestra1: data.data.palestra1,
          palestra2: data.data.palestra2,
          palestra3: data.data.palestra3,
          palestra4: data.data.palestra4,
          palestra5: data.data.palestra5,
          palestra6: data.data.palestra6,
          palestra7: data.data.palestra7,
          palestra8: data.data.palestra8,
          roda: data.data.roda,
          miniCurso1: data.data.miniCurso1,
          miniCurso2: data.data.miniCurso2,
          miniCurso3: data.data.miniCurso3,
          miniCurso4: data.data.miniCurso4,
          miniCurso5: data.data.miniCurso5,
          miniCurso6: data.data.miniCurso6,
        });

        setMiniCursos([
          {
            id: 1,
            idPresenca: data.data[0].palestras[9].idPresenca,
            titulo: data.data[0].palestras[9].titulo,
            presente: data.data[0].palestras[9].presente
          },
          {
            id: 2,
            idPresenca: data.data[0].palestras[10].idPresenca,
            titulo: data.data[0].palestras[10].titulo,
            presente: data.data[0].palestras[10].presente
          },
          {
            id: 3,
            idPresenca: data.data[0].palestras[11].idPresenca,
            titulo: data.data[0].palestras[11].titulo,
            presente: data.data[0].palestras[11].presente
          },
          {
            id: 4,
            idPresenca: data.data[0].palestras[12].idPresenca,
            titulo: data.data[0].palestras[12].titulo,
            presente: data.data[0].palestras[12].presente
          },
          {
            id: 5,
            idPresenca: data.data[0].palestras[13].idPresenca,
            titulo: data.data[0].palestras[13].titulo,
            presente: data.data[0].palestras[13].presente
          },
          {
            id: 6,
            idPresenca: data.data[0].palestras[14].idPresenca,
            titulo: data.data[0].palestras[14].titulo,
            presente: data.data[0].palestras[14].presente
          }
        ]);

        setPalestras(data.data[0].palestras)
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
      await updateCampo(`aluno/${pessoa.id}`, { 'pagamento': true });
    } catch (error) {
      Alert('Atenção', 'Erro ao aceitar inscrição: ' + error, 'error');
    }
  }

  const handleBuscaCpf = async (e) => {
    e.preventDefault();
    getDadosParticipante();
  }

  return (
    <>
      <HeaderPage title='Sistema para registro de presenças' />

      {isLoading && <Loader />}
      <Line />

      <ContentForm>
        <Form onSubmit={handleBuscaCpf}>
          <FormGrouping>
            <Input
              value={cpf}
              onChange={(e) => setCpf(formatCpf(e.target.value))}
              placeholder="Informe o cpf do participante"
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

        {pessoa.pagamento ? (
          <CronogramaPresencas
            presenca={preseca}
            func={handlePresenca}
            palestras={palestras}
            miniCursos={miniCursos}
          />
        ) : <button
          onClick={() => handleEfetivarInscricao()}
        >
          Efetivar inscrição
        </button>}
      </ContentPresenca>
    </>
  )
}

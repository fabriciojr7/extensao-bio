import { useState } from "react";
import HeaderPage from "../components/HeaderPage"
import Input from "../../../components/Input";
import FormGrouping from "../../../components/FormGrouping";
import Button from "../../../components/Button";
import formatCpf from "../../../utils/formatCpf";
import { getDados, updateCampo } from "../../../services/api";
import Loader from "../../../components/Loader";
import { Alert, ConfirmeAlert } from "../../../utils/Alert";

import {
  Form, Line, ContentForm, ContentDados,
  Presenca, ContentPresenca, LineContent
} from "./styles";

export default function Dashboard() {
  const [cpf, setCpf] = useState('');
  const [pessoa, setPessoa] = useState({});
  const [preseca, setPresenca] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setSetvisible] = useState(false);

  const handleBuscaCpf = async () => {
    try {
      if (cpf.trim()) {
        if (cpf && cpf.length < 14) {
          Alert('Atenção', 'Informe um CPF válido.', 'warning');
          return;
        }
        setIsLoading(true);
        const { data } = await getDados(`pessoa/${cpf}`);
        setPessoa({
          id: data.data.id,
          cpf_pessoa: data.data.cpf,
          nome: data.data.nome_completo,
          email: data.data.email,
          fone: data.data.fone
        });
        setPresenca({
          presenca1: data.data.palestra1,
          presenca2: data.data.palestra2,
          presenca3: data.data.palestra3,
          presenca4: data.data.palestra4,
          presenca5: data.data.palestra5,
          presenca6: data.data.palestra6,
        });
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

  const handlePresenca = async (dados) => {
    try {
      await updateCampo(`pessoa/${pessoa.id}`, dados);
      handleBuscaCpf();
    } catch (error) {
      Alert('Atenção', 'Erro ao registrar presença: ' + error, 'error');
    }
  }

  return (
    <>
      <HeaderPage title='Sistema para registro de presenças' />

      {isLoading && <Loader />}
      <Line />

      <ContentForm>
        <Form >
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
            <Button type="button" onClick={handleBuscaCpf}>Buscar</Button>
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
          <Line />
        </ContentDados>

        <Presenca>
          <h1>Lista de presença</h1>
          <li>
            <span>Palestra 1: </span> {preseca.presenca1 ? 'Prensença já confirmada' :
              <button
                onClick={() =>
                  ConfirmeAlert({ titlePergunta: 'Deseja confirmar a presença?' }, handlePresenca({ 'palestra1': true }))}
              >
                Confirmar presença
              </button>}
          </li>
          <li>
            <span>Palestra 2: </span> {preseca.presenca2 ? 'Prensença já confirmada' :
              <button
                onClick={() =>
                  handlePresenca({ 'palestra2': true })}
              >
                Confirmar presença
              </button>}
          </li>
          <li>
            <span>Palestra 3: </span> {preseca.presenca3 ? 'Prensença já confirmada' :
              <button
                onClick={() =>
                  ConfirmeAlert({ titlePergunta: 'Deseja confirmar a presença?' }, () => handlePresenca({ 'palestra3': true }))}
              >
                Confirmar presença
              </button>}
          </li>
          <li>
            <span>Palestra 4: </span> {preseca.presenca4 ? 'Prensença já confirmada' :
              <button
                onClick={() =>
                  ConfirmeAlert({ titlePergunta: 'Deseja confirmar a presença?' }, () => handlePresenca({ 'palestra4': true }))}
              >
                Confirmar presença
              </button>}
          </li>
          <li>
            <span>Palestra 5: </span> {preseca.presenca5 ? 'Prensença já confirmada' :
              <button
                onClick={() => handlePresenca({ 'palestra5': true })}
              >
                Confirmar presença
              </button>}
          </li>
          <li>
            <span>Palestra 6: </span> {preseca.presenca6 ? 'Prensença já confirmada' :
              <button
                onClick={() => handlePresenca({ 'palestra6': true })}
              >
                Confirmar presença
              </button>}
          </li>
        </Presenca>
      </ContentPresenca>
    </>
  )
}

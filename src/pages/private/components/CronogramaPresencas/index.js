import Table from "../Table";

import { FaCoffee, FaHamburger } from "react-icons/fa";

import { Container, TdIcon } from "./styles";
import { Alert, ConfirmeAlert } from "../../../../utils/Alert";
import Select from "../../../../components/Select";
import { useEffect, useState } from "react";

export default function CronogramaPresencas({ func, palestras, miniCursos }) {
  const [curso, setCurso] = useState(0);
  const [presente, setPresente] = useState(false);

  useEffect(() => {
    const getCurso = () => {
      const found = miniCursos.find(miniCurso => miniCurso.presente);

      if (!found) {
        setCurso(0);
        setPresente(false);
      } else {
        setCurso(found.idPresenca);
        setPresente(found.presente);
      }

    }
    getCurso();
  }, [miniCursos]);

  const handlePresencaMiniCurso = async () => {
    if (curso === 0) {
      Alert('Atenção', 'O minicurso deve ser informado.', 'info');
    } else {
      func(curso, { 'presente': !presente });
    }
  }

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Horario</th>
            <th></th>
            <th>Quinta (01/09)</th>
            <th></th>
            <th>Sexta (02/09)</th>
            <th></th>
            <th>Sábado (03/09)</th>
          </tr>

          <tr>
            <th>07:00</th>

            <td rowSpan={5} className="local"><p>Anfiteatro Dercir</p></td>

            <td>Entrega de material</td>

            <td rowSpan={5} className="local"><p>Bloco 6 - área aberta</p></td>

            <td rowSpan={5}>
              Apresentação de trabalhos e visita guiada de alunos do ensino médio
            </td>

            <td rowSpan={5} className="local"><p>Multiplas salas</p></td>

            <td rowSpan={5} className={presente ? "confirmada" : ""}>
              <p>Oficinas/Minicursos</p>
              <Select
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
                disabled={presente}
              >
                <option value={0}>
                  Selecione o minicurso
                </option>
                {
                  miniCursos.map(minicurso => (
                    <option value={minicurso.idPresenca} key={minicurso.idPresenca}>
                      {minicurso.titulo}
                    </option>
                  ))
                }
              </Select>

              <button
                onClick={() =>
                  ConfirmeAlert({
                    titlePergunta: presente ?
                      'Deseja remover a presença?' : 'Deseja confirmar a presença?'
                  }, () => handlePresencaMiniCurso())}
              >
                {presente ? 'Remover presença' : 'Confirmar presença'}
              </button>
            </td>
          </tr>

          <tr>
            <th>07:30</th>

            <td>Abertura </td>
          </tr>

          <tr>
            <th>08:00</th>

            <td className={palestras[0]?.presente ? "confirmada" : ""}>
              <p>Palestra 1</p>
              <button
                onClick={() =>
                  ConfirmeAlert({
                    titlePergunta: palestras[0]?.presente ?
                      'Deseja remover a presença?' : 'Deseja confirmar a presença?'
                  }, () => func(palestras[0]?.idPresenca, { 'presente': !palestras[0]?.presente }))}
              >
                {palestras[0]?.presente ? 'Remover presença' : 'Confirmar presença'}
              </button>
            </td>
          </tr>

          <tr>
            <th>09:30</th>
            <td>
              <TdIcon>
                <FaCoffee size={24} />
                Coffe
              </TdIcon>
            </td>
          </tr>

          <tr>
            <th>10:00</th>
            <td className={palestras[1]?.presente ? "confirmada" : ""}>
              <p>Palestra 2</p>
              <button
                onClick={() =>
                  ConfirmeAlert({
                    titlePergunta: palestras[1]?.presente ?
                      'Deseja remover a presença?' : 'Deseja confirmar a presença?'
                  }, () => func(palestras[1]?.idPresenca, { 'presente': !palestras[1]?.presente }))}
              >
                {palestras[1]?.presente ? 'Remover presença' : 'Confirmar presença'}
              </button>
            </td>
          </tr>

          <tr>
            <th>11:00</th>
            <td colSpan={5}>
              <TdIcon>
                <FaHamburger size={24} />
                Almoço
              </TdIcon>
            </td>
            <td rowSpan={7}>Almoço - PL confraternização</td>
          </tr>

          <tr>
            <th>13:00</th>
            <td rowSpan={6} className="local"><p>Anfiteatro Geografia</p></td>

            <td className={palestras[2]?.presente ? "confirmada" : ""}>
              <p>Palestra 3</p>
              <button
                onClick={() =>
                  ConfirmeAlert({
                    titlePergunta: palestras[2]?.presente ?
                      'Deseja remover a presença?' : 'Deseja confirmar a presença?'
                  }, () => func(palestras[2]?.idPresenca, { 'presente': !palestras[2]?.presente }))}
              >
                {palestras[2]?.presente ? 'Remover presença' : 'Confirmar presença'}
              </button>
            </td>

            <td rowSpan={6} className="local"><p>Anfiteatro Geografia</p></td>

            <td rowSpan={2} className={palestras[8]?.presente ? "confirmada" : ""}>
              <p>Roda de tereré e Empreendedorismo</p>
              <button
                onClick={() =>
                  ConfirmeAlert({
                    titlePergunta: palestras[8]?.presente ?
                      'Deseja remover a presença?' : 'Deseja confirmar a presença?'
                  }, () => func(palestras[8]?.idPresenca, { 'presente': !palestras[8]?.presente }))}
              >
                {palestras[8]?.presente ? 'Remover presença' : 'Confirmar presença'}
              </button>
            </td>

            <td rowSpan={6} className="local"><p>ADUFMS</p></td>
          </tr>

          <tr>
            <th>14:00</th>
            <td className={palestras[3]?.presente ? "confirmada" : ""}>
              <p>Palestra 4</p>
              <button
                onClick={() =>
                  ConfirmeAlert({
                    titlePergunta: palestras[3]?.presente ?
                      'Deseja remover a presença?' : 'Deseja confirmar a presença?'
                  }, () => func(palestras[3]?.idPresenca, { 'presente': !palestras[3]?.presente }))}
              >
                {palestras[3]?.presente ? 'Remover presença' : 'Confirmar presença'}
              </button>
            </td>
          </tr>

          <tr>
            <th>15:00</th>
            <td>
              <TdIcon>
                <FaCoffee size={24} />
                Coffe
              </TdIcon>
            </td>

            <td>
              <TdIcon>
                <FaCoffee size={24} />
                Coffe
              </TdIcon>
            </td>
          </tr>

          <tr>
            <th>15:15</th>
            <td className={palestras[4]?.presente ? "confirmada" : ""}>
              <p>Palestra 5</p>
              <button
                onClick={() =>
                  ConfirmeAlert({
                    titlePergunta: palestras[4]?.presente ?
                      'Deseja remover a presença?' : 'Deseja confirmar a presença?'
                  }, () => func(palestras[4]?.idPresenca, { 'presente': !palestras[4]?.presente }))}
              >
                {palestras[4]?.presente ? 'Remover presença' : 'Confirmar presença'}
              </button>
            </td>

            <td className={palestras[6]?.presente ? "confirmada" : ""}>
              <p>Palestra 7</p>
              <button
                onClick={() =>
                  ConfirmeAlert({
                    titlePergunta: palestras[6]?.presente ?
                      'Deseja remover a presença?' : 'Deseja confirmar a presença?'
                  }, () => func(palestras[6]?.idPresenca, { 'presente': !palestras[6]?.presente }))}
              >
                {palestras[6]?.presente ? 'Remover presença' : 'Confirmar presença'}
              </button>
            </td>
          </tr>

          <tr>
            <th>16:15</th>
            <td className={palestras[5]?.presente ? "confirmada" : ""}>
              <p>Palestra 6</p>
              <button
                onClick={() =>
                  ConfirmeAlert({
                    titlePergunta: palestras[5]?.presente ?
                      'Deseja remover a presença?' : 'Deseja confirmar a presença?'
                  }, () => func(palestras[5]?.idPresenca, { 'presente': !palestras[5]?.presente }))}
              >
                {palestras[5]?.presente ? 'Remover presença' : 'Confirmar presença'}
              </button>
            </td>

            <td className={palestras[7]?.presente ? "confirmada" : ""}>
              <p>Palestra 8</p>
              <button
                onClick={() =>
                  ConfirmeAlert({
                    titlePergunta: palestras[7]?.presente ?
                      'Deseja remover a presença?' : 'Deseja confirmar a presença?'
                  }, () => func(palestras[7]?.idPresenca, { 'presente': !palestras[7]?.presente }))}
              >
                {palestras[7]?.presente ? 'Remover presença' : 'Confirmar presença'}
              </button>
            </td>
          </tr>
        </thead>
      </Table>
    </Container>
  )
}

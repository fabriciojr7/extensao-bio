import { useState, useEffect, useMemo } from "react";
import HeaderPage from "../components/HeaderPage";
import Table from "../components/Table";
import InputSearch from "../components/InputSearch";
import { listagem } from "../../../services/api";
import Loader from "../../../components/Loader";
import { Alert } from "../../../utils/Alert";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import { Container, SubHeader, Count } from "./styles.js";

export default function Inscritos() {
  const [inscritos, setInscritos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getInscritos = async () => {
    try {
      setIsLoading(true);
      const { data } = await listagem('presenca');
      setInscritos(data.data);
    } catch {
      Alert('Atenção', "Erro ao carregar a lista de inscritos.", 'error');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getInscritos();
  }, []);

  const filteredInscritos = useMemo(() => inscritos.filter((inscrito) => (
    inscrito.nome_completo.toLowerCase().includes(searchTerm.toLowerCase())
    || inscrito.cpf.includes(searchTerm)
  )), [inscritos, searchTerm]);

  return (
    <Container>
      <HeaderPage title='Inscritos' />
      {isLoading && <Loader />}

      <SubHeader>
        <InputSearch
          term={searchTerm}
          change={setSearchTerm}
          place='Buscar por nome ou cpf...'
        />
        <Count>
          <h3>
            {filteredInscritos.length}
            {' '}
            {filteredInscritos.length === 1 ? 'inscrito' : 'inscritos'}
          </h3>
        </Count>
      </SubHeader>

      <Table>
        <thead>
          <tr>
            <th className="text">Nome</th>
            <th>CPF</th>
            <th>P-1</th>
            <th>P-2</th>
            <th>P-3</th>
            <th>P-4</th>
            <th>P-5</th>
            <th>P-6</th>
            <th>P-7</th>
            <th>P-8</th>
            <th>Roda</th>
            <th>Minicurso</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredInscritos.map((inscrito) => (
              <tr key={inscrito.id}>
                <td className="text" data-title="Nome">{inscrito.nome_completo}</td>
                <td data-title="CPF">{inscrito.cpf}</td>
                <td data-title="P-1">{inscrito.palestras[0].presente ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
                <td data-title="P-2">{inscrito.palestras[1].presente ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
                <td data-title="P-3">{inscrito.palestras[2].presente ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
                <td data-title="P-4">{inscrito.palestras[3].presente ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
                <td data-title="P-5">{inscrito.palestras[4].presente ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
                <td data-title="P-6">{inscrito.palestras[5].presente ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
                <td data-title="P-3">{inscrito.palestras[6].presente ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
                <td data-title="P-4">{inscrito.palestras[7].presente ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
                <td data-title="P-5">{inscrito.palestras[8].presente ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
                <td data-title="P-6">{inscrito.palestras[9].presente ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  )
}

import { useState, useEffect, useMemo } from "react";
import HeaderPage from "../components/HeaderPage";
import Table from "../components/Table";
import InputSearch from "../components/InputSearch";
import { listagem } from "../../../services/api";
import Loader from "../../../components/Loader";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import { Container, SubHeader, Count } from "./styles.js";

export default function Inscritos() {
  const [inscritos, setInscritos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getInscritos = async () => {
    try {
      setIsLoading(true);
      const { data } = await listagem('pessoa');
      setInscritos(data.data);
    } catch {
      console.log('deu erro')
    }finally{
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
            {/* <th className="text">E-mail</th>
            <th className="text">Institução</th> */}
            <th>CPF</th>
            <th>Palestra 1</th>
            <th>Palestra 2</th>
            <th>Palestra 3</th>
            <th>Palestra 4</th>
            <th>Palestra 5</th>
            <th>Palestra 6</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredInscritos.map((inscrito) => (
              <tr key={inscrito.id}>
                <td className="text" data-title="Nome">{inscrito.nome_completo}</td>
                <td data-title="CPF">{inscrito.cpf}</td>
                <td data-title="Palestra 1">{inscrito.palestra1 ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
                <td data-title="Palestra 2">{inscrito.palestra2 ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
                <td data-title="Palestra 3">{inscrito.palestra3 ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
                <td data-title="Palestra 4">{inscrito.palestra4 ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
                <td data-title="Palestra 5">{inscrito.palestra5 ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
                <td data-title="Palestra 6">{inscrito.palestra6 ?
                  <FaCheckCircle className="presenca" /> : <FaTimesCircle className="falta" />}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  )
}

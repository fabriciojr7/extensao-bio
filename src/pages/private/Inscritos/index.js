import { useState, useEffect, useMemo } from "react";
import HeaderPage from "../components/HeaderPage";
import Table from "../components/Table";
import InputSearch from "../components/InputSearch";
import { listagem } from "../../../services/api";
import Loader from "../../../components/Loader";
import { Alert } from "../../../utils/Alert";
import Pagination from "../components/Pagination";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import { Container, SubHeader, Count } from "./styles.js";

export default function Inscritos() {
  const [inscritos, setInscritos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);



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

  const filteredInscritos = useMemo(() => inscritos.filter((inscrito) => (
    inscrito.nome_completo.toLowerCase().includes(searchTerm.toLowerCase())
    || inscrito.cpf.includes(searchTerm)
  )), [inscritos, searchTerm]);

  const itensPerPage = 15;
  const pages = Math.ceil(filteredInscritos.length / itensPerPage);
  const startItens = currentPage * itensPerPage;
  const endIndex = startItens + itensPerPage;
  const currentInscritos = filteredInscritos.slice(startItens, endIndex);

  useEffect(() => {
    getInscritos();
  }, []);


  const miniCursoTable = (inscrito) => {
    if (inscrito?.palestras[8]?.presente) {
      return inscrito?.palestras[8];
    } else if (inscrito?.palestras[9]?.presente) {
      return inscrito?.palestras[9];
    } else if (inscrito?.palestras[10]?.presente) {
      return inscrito?.palestras[10];
    } else if (inscrito?.palestras[11]?.presente) {
      return inscrito?.palestras[11];
    } else if (inscrito?.palestras[12]?.presente) {
      return inscrito?.palestras[12];
    } else if (inscrito?.palestras[13]?.presente) {
      return inscrito?.palestras[13];
    } else {
      return { id: 7, titulo: 'MiniCurso', presente: false };
    }
  }

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

      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

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
            <th>
              MiniCurso
            </th>
          </tr>
        </thead>
        <tbody>
          {
            currentInscritos.map((inscrito) => (
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
                <td data-title="P-6">{miniCursoTable(inscrito)?.presente ?
                  <p>{miniCursoTable(inscrito)?.titulo}</p>
                  : <FaTimesCircle className="falta" />
                }</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  )
}

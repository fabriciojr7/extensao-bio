import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import HeaderPage from "../components/HeaderPage";
import Table from "../components/Table";
import InputSearch from "../components/InputSearch";
import { listagem } from "../../../services/api";
import Loader from "../../../components/Loader";
import { Alert } from "../../../utils/Alert";

import { Container, SubHeader, Count } from "./styles.js";
import Pagination from "../components/Pagination";

export default function Resumos() {
  const [resumos, setResumos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const navigate = useNavigate();

  const getResumos = async () => {
    try {
      setIsLoading(true);
      const { data } = await listagem('resumo');
      setResumos(data.data);
    } catch {
      Alert('Atenção', "Erro ao carregar a lista de resumos.", 'error');
    } finally {
      setIsLoading(false);
    }
  }

  const filteredResumos = useMemo(() => resumos.filter((resumo) => (
    resumo.autores.toLowerCase().includes(searchTerm.toLowerCase())
    || resumo.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    || resumo.aluno_cpf.includes(searchTerm)
  )), [resumos, searchTerm]);

  const itensPerPage = 15;
  const pages = Math.ceil(filteredResumos.length / itensPerPage);
  const startItens = currentPage * itensPerPage;
  const endIndex = startItens + itensPerPage;
  const currentResumos = filteredResumos.slice(startItens, endIndex);

  useEffect(() => {
    getResumos();
  }, []);



  const visualizarResumo = (cpf) => {
    navigate(`/adm/visualizacaoResumo/${cpf}`);
  }

  return (
    <Container>
      <HeaderPage title='Resumos' />
      {isLoading && <Loader />}

      <SubHeader>
        <InputSearch
          term={searchTerm}
          change={setSearchTerm}
          place='Buscar por autores, título ou cpf...'
        />
        <Count>
          <h3>
            {filteredResumos.length}
            {' '}
            {filteredResumos.length === 1 ? 'resumo' : 'resumos'}
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
            <th className="text">Autores</th>
            <th className="text">Título</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {
            currentResumos.map((resumo) => (
              <tr
                key={resumo.id}
                onClick={() => visualizarResumo(resumo.id)}
              >
                <td className="text" data-title="Autores">{resumo.autores}</td>
                <td className="text" data-title="Título">{resumo.titulo}</td>
                <td data-title="CPF">{resumo.aluno_cpf}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  )
}

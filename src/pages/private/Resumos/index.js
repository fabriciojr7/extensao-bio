import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import HeaderPage from "../components/HeaderPage";
import Table from "../components/Table";
import InputSearch from "../components/InputSearch";
import { listagem } from "../../../services/api";
import Loader from "../../../components/Loader";

import { Container, SubHeader, Count } from "./styles.js";

export default function Resumos() {
  const [resumos, setResumos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const getInscritos = async () => {
    try {
      setIsLoading(true);
      const { data } = await listagem('resumo');
      setResumos(data.data);
    } catch {
      console.log('deu erro')
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getInscritos();
  }, []);

  const filteredResumos = useMemo(() => resumos.filter((resumo) => (
    resumo.autores.toLowerCase().includes(searchTerm.toLowerCase())
    || resumo.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    || resumo.pessoa_cpf.includes(searchTerm)
  )), [resumos, searchTerm]);

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
            filteredResumos.map((resumo) => (
              <tr
                key={resumo.id}
                onClick={() => visualizarResumo(resumo.id)}
              >
                <td className="text" data-title="Autores">{resumo.autores}</td>
                <td className="text" data-title="Título">{resumo.titulo}</td>
                <td data-title="CPF">{resumo.pessoa_cpf}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  )
}

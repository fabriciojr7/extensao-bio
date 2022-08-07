import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import Loader from "../../../components/Loader";
import { getDados } from "../../../services/api";
import { Alert } from "../../../utils/Alert";
import HeaderPage from "../components/HeaderPage";

import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

import { Container, AreaVoltar, Card } from "./styles";

export default function VisualizacaoResumo() {
  const [resumo, setResumo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getResumo = async () => {
      try {
        setIsLoading(true);
        const { data } = await getDados(`resumo/${id}`);
        setResumo(data.data[0]);
      } catch (error) {
        const status = error.response.data
        Alert('Atenção', 'Erro ao buscar dados do resumo: ' + status, 'error');
      } finally {
        setIsLoading(false);
      }
    }

    getResumo();

  }, [id]);

  return (
    <>
      <HeaderPage title="Resumo" />
      {isLoading && <Loader />}
      <AreaVoltar>
        <Button onClick={() => navigate('/adm/resumos')}>Voltar a lista</Button>
      </AreaVoltar>


      <Container>
        <Card>
          <h1>Dados do resumo</h1>
          <h2><span>Título:</span> {resumo.titulo}</h2>
          <h2><span>Autores:</span> {resumo.autores}</h2>
          <h2><span>Filiação:</span> {resumo.filiacao}</h2>
          {resumo.apoio && <h2><span>Apoio:</span> {resumo.apoio}</h2>}
          <h2><span>Palavras-chave:</span> {resumo.palavras_chave}</h2>
        </Card>

        <Card>
          <h1>Dados do responsável</h1>
          <h2><span>Nome:</span> {resumo.alunos?.nome_completo}</h2>
          <h2><span>CPF:</span> {resumo.alunos?.cpf}</h2>
          <h2><span>E-mail:</span> {resumo.alunos?.email}</h2>
          <h2 className="inscricao"><span>Inscrição efetivada: </span>
            {resumo.alunos?.pagamento
              ? <>
                {' '}Sim
                <FaThumbsUp className="like"/>
              </>
              : <>
                {' '}Não
                <FaThumbsDown className="disliked"/>
              </>}
          </h2>
        </Card>

        <Card>
          <h1>Texto</h1>
          <p>
            {resumo.texto}
          </p>
        </Card>

      </Container>
    </>
  )
}

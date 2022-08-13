import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import {
  Container, ContainerFaixa, Content, Faixa, LogoEvento, Teste, Text
} from "./styles";

import semaBio from '../../assets/images/logo-bio.png';
import { Patrocinios } from "../../components/Patrocinios";
export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Teste />
      <Faixa>
        <ContainerFaixa>
          <LogoEvento>
            <img src={semaBio} alt="Logo do Evento" />
          </LogoEvento>
          <Text>
            <h1>
              <span>XIII</span>
              SEMANA DA BIOLOGIA <br />
              <span>2022</span>
            </h1>
            <h2>01 a 03 de setembro de 2022</h2>
          </Text>
        </ContainerFaixa>
      </Faixa>

      <Content>
        <h3>Sejam muito bem vindos a página oficial da XIII semana da Biologia!</h3>
        <p>Este ano o nosso evento será presencial. Teremos palestras,
          mini cursos e mesa redonda com especialistas de destaque! E haverá <span>certificação</span> para
          todos os participantes.
        </p>

        <Button
          onClick={() => navigate('/inscricao')}
        >
          Inscreva-se no evento
        </Button>
        <Patrocinios />
      </Content>


    </Container>
  )
}

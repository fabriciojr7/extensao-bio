import {
  Container, Faixa, LogoEvento,
  ContainerFaixa, Text, Content, Btn
} from "./styles"

import logo from '../../assets/images/logo-bio.png'
export default function Home() {
  return (
    <Container>
      <Faixa>
        <ContainerFaixa>
          <LogoEvento>
            <img src={logo} alt="Logo do Evento" />
          </LogoEvento>
          <Text>
            <h1>XIII SEMANA DA BIOLOGIA - 2022</h1>
            <h2>01 a 03 de setembro de 2022</h2>
          </Text>
        </ContainerFaixa>
      </Faixa>

      <Content>
        <h3>Sejam muito bem vindos a página oficial da XIII semana da Biologia!</h3>
        <p>Este ano o nosso evento será presencial, e totalmente gratuito. Teremos palestras,
          mini cursos e mesa redonda com especialistas de destaque! E haverá <span>certificação</span> para
          todos os participantes. </p>

        <Btn to='/'>Inscreva-se no evento</Btn>
      </Content>


    </Container>
  )
}

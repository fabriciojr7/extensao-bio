import { Container, Content, AreaImg, Text } from './styles'

import logo from '../../assets/images/logo-ufms.png';
import capi from '../../assets/images/capi.png';

export default function Footer() {
  return (
    <Container>
      <Content>
        <AreaImg>
          <img src={logo} alt='Logo Universidade Federal do Mato Grosso do Sul' />
        </AreaImg>

        <Text>
          <h3>XIII SEMANA DA BIOLOGIA - 2022</h3>
          <h3>01 a 03 de setembro de 2022</h3>
        </Text>

        <AreaImg>
          <img src={capi} alt='Mascote CPTL'/>
        </AreaImg>
      </Content>


    </Container>
  )
}

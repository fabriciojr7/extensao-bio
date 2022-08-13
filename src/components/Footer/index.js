import { AreaImg, Container, Content, Text } from './styles';

import logo from '../../assets/images/logo-ufms.png';
import sema from '../../assets/images/semana-bio.png';

export default function Footer() {
  return (
    <Container>
      <Content>
        <AreaImg>
          <img src={logo} alt='Logo Universidade Federal do Mato Grosso do Sul' />
        </AreaImg>
        <Text>
          <h3>XIII SEMANA DA BIOLOGIA</h3>
          <h3>2022</h3>
          <h3>01 a 03 de setembro de 2022</h3>
        </Text>

        <AreaImg>
          <img src={sema} alt='XIII SemaBio' />
        </AreaImg>
      </Content>
    </Container>
  )
}

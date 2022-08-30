import { Container } from './styles';
import chikorita from '../../assets/images/chikorita.png';

export default function Finish({ text }) {
  return (
    <Container>
      <img src={chikorita} alt='Imagem chikorita' />
      <h2>{text}</h2>
    </Container>
  )
}

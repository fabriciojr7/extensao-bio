import { Container } from './styles';
import bulbasaur from '../../assets/images/bulbasaur.png';

export default function Finish({ text }) {
  return (
    <Container>
      <img src={bulbasaur} alt='Imagem bulbasaur' />
      <h2>{text}</h2>
    </Container>
  )
}

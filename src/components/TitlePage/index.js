import { Container, Image } from "./styles"
import image1 from '../../assets/images/folhas.png';
import image2 from '../../assets/images/folhas.png';

export default function TitlePage({ text }) {
  return (
    <Container>
      <Image imagem={image1} />
      <h1>{text}</h1>
      <Image imagem={image2} />
    </Container>
  )
}

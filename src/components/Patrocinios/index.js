import { Container, Titulo, AreaImage } from "./styles";

import logo1 from "../../assets/images/apoio/Chocoflores.png";
import logo2 from "../../assets/images/apoio/Logo_BrasaGrill.jpg";

const patrociniosLogo = [
  {
    id: 1,
    nome: "Chocoflore's",
    logo: logo1
  },
  {
    id: 2,
    nome: "BrasaGrill",
    logo: logo2
  }
]

export function Patrocinios() {
  return (
    <Container>

      <Titulo>
        <p>Apoio:</p>
      </Titulo>

      <AreaImage>
        {
          patrociniosLogo.map(patrocinioLogo => (
            <img
              key={patrocinioLogo.id}
              src={patrocinioLogo.logo}
              alt={`Foto ${patrocinioLogo.nome}`}
            />
          ))
        }
      </AreaImage>
    </Container>
  )
}

import { Container, Titulo, AreaImage } from "./styles";

import logo1 from "../../assets/images/apoio/Chocoflores.png";
import logo2 from "../../assets/images/apoio/Logo_BrasaGrill.jpg";
import logo3 from "../../assets/images/apoio/Banco do Brasil.jpeg";
import logo4 from "../../assets/images/apoio/CNA.png";
import logo5 from "../../assets/images/apoio/vencetex.png";

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
  },
  {
    id: 3,
    nome: "Banco do Brasil",
    logo: logo3
  },
  {
    id: 4,
    nome: "CNA",
    logo: logo4
  },
  {
    id: 5,
    nome: "Vencetex",
    logo: logo5
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

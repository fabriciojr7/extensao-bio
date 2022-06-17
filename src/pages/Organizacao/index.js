import TitlePage from "../../components/TitlePage";
import CardParticipante from "../../components/CardParticipante";
import TitleTopico from "../../components/TitleTopico";

import { Content } from "./styles.js";

import { docentes, discentes } from "./dataOrganizacao";


export default function Organizacao() {
  return (
    <>
      <TitlePage text='Comissão Organizadora' />

      <Content>
        <TitleTopico text='Membros docentes' />

        {
          docentes.map(docente => (
            <CardParticipante key={docente.id} participante={docente} />
          ))
        }

        <TitleTopico text='Membros discentes' />

        {
          discentes.map(discente => (
            <CardParticipante key={discente.id} participante={discente} />
          ))
        }

      </Content>

    </>

  )
}

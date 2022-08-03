
import Modal from "../Modal"

import { ContentModal } from "./styles";

export default function ModalPalestra({ toggleModal, palestra }) {

  return (
    <Modal
      title={`${palestra.tema}`}
      btnLabel='OK'
      close={toggleModal}
      cancelVisible
    // func={enviarMensagemContato}
    >
      <ContentModal>
        {palestra.horario}
        {palestra.descricao}
        <img src={palestra.foto} alt="" />
        {palestra.resumo}
      </ContentModal>
    </Modal>
  )
}

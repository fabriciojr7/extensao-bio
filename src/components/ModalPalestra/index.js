
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
        <p>{palestra.horario && `Horário: ${palestra.horario}`}</p>
        <p>{palestra.palestrante && `Palestrante: ${palestra.palestrante}`}</p>
        
        <img src={palestra.foto} alt="" />
        {palestra.resumo}
      </ContentModal>
    </Modal>
  )
}


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
        
        {palestra.foto && <img src={palestra.foto} alt="" />}
        <p>{palestra.resumo && `Resumo: ${palestra.resumo}`}</p>
      </ContentModal>
    </Modal>
  )
}

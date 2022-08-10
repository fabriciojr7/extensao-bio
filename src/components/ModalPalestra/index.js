import Modal from "../Modal"

import {
   ContentModal, Resumo, Palestrante, TemaMiniCurso
 } from "./styles";

export default function ModalPalestra({ toggleModal, palestra }) {
  return (
    <Modal
      title={`${palestra.tema}`}
      btnLabel='OK'
      cancelVisible
      func={toggleModal}
    >
      <ContentModal>
        {
          palestra.miniCursos?.map(minicurso => (
            <div className="miniCurso" key={minicurso.id}>
              <Palestrante >
                <TemaMiniCurso><span>Tema:</span> {minicurso.tema}</TemaMiniCurso>
                {minicurso.foto && <img src={minicurso.foto} alt="" />}
                {minicurso.palestrante && <p><span>Palestrante:</span> {minicurso.palestrante}</p>}
                {minicurso.especializacao && <p><span>Especialização:</span> {minicurso.especializacao}</p>}

                {minicurso.foto2 && <img src={minicurso.foto2} alt="" />}
                {minicurso.palestrante2 && <p><span>Palestrante:</span> {minicurso.palestrante2}</p>}
                {minicurso.especializacao2 && <p><span>Especialização:</span> {minicurso.especializacao2}</p>}
              </Palestrante>
              <Resumo>
                <p>{minicurso.resumo && `${minicurso.resumo}`}</p>
              </Resumo>
            </div>
          ))
        }


        <Palestrante>
          {palestra.foto && <img src={palestra.foto} alt="" />}
          {palestra.palestrante && <p><span>Palestrante:</span> {palestra.palestrante}</p>}
          {palestra.especializacao && <p><span>Especialização:</span> {palestra.especializacao}</p>}
        </Palestrante>
        {palestra.titulo && <p className="titulo"><span>Título:</span> {palestra.titulo}</p>}
        <Resumo>
          <p>{palestra.resumo && `${palestra.resumo}`}</p>
        </Resumo>

        <Palestrante>
          {palestra.foto2 && <img src={palestra.foto2} alt="" />}
          {palestra.palestrante2 && <p><span>Palestrante:</span> {palestra.palestrante2}</p>}
          {palestra.especializacao2 && <p><span>Especialização:</span> {palestra.especializacao2}</p>}
        </Palestrante>
        <Resumo>
          <p>{palestra.resumo2 && `${palestra.resumo2}`}</p>
        </Resumo>

        <Palestrante>
          {palestra.foto3 && <img src={palestra.foto3} alt="" />}
          {palestra.palestrante3 && <p><span>Palestrante:</span> {palestra.palestrante3}</p>}
          {palestra.especializacao3 && <p><span>Especialização:</span> {palestra.especializacao3}</p>}
        </Palestrante>
        <Resumo>
          <p>{palestra.resumo3 && `${palestra.resumo3}`}</p>
        </Resumo>
      </ContentModal>
    </Modal>
  )
}

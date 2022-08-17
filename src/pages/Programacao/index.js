import { useState } from 'react';
import ModalPalestra from '../../components/ModalPalestra';
import TitlePage from "../../components/TitlePage";
import { dia1, dia2, dia3 } from "./dataProgramacao";

import {
  Container, TabHead, Tab, TabBody, TabContent,
  Card, Informacoes, Evento
} from './styles';

export default function Programacao() {
  const [toggle, setToggle] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [palestra, setPalestra] = useState([]);

  const toggleTab = (index) => {
    setToggle(index);
  };

  const modalToggle = () => {
    setModalOpen((prevState) => !prevState)
  }

  const handleModalOpen = (dia) => {
    setPalestra(dia);
    modalToggle();
  }

  return (
    <>
      <TitlePage text='Programação' />

      <Container>
        <TabHead>
          <Tab
            onClick={() => toggleTab(1)}
            className={toggle === 1 ? 'left active' : 'left'}
          >
            <h4>Dia 1</h4>
            <p>1 setembro 2022</p>
          </Tab>

          <Tab
            onClick={() => toggleTab(2)}
            className={toggle === 2 ? 'right active' : 'right'}
          >
            <h4>Dia 2</h4>
            <p>2 setembro 2022</p>
          </Tab>

          <Tab
            onClick={() => toggleTab(3)}
            className={toggle === 3 ? 'right active' : 'right'}
          >
            <h4>Dia 3</h4>
            <p>3 setembro 2022</p>
          </Tab>
        </TabHead>

        <TabBody>
          <TabContent className={toggle === 1 ? 'active' : ''}>
            {
              dia1.map(dia => (
                <Card key={dia.id} onClick={() => handleModalOpen(dia)}>
                  <Informacoes>
                    <h4>{dia.horario}</h4>
                    <span>{dia.local}</span>
                  </Informacoes>
                  <Evento>
                    <h1>{dia.tema}</h1>
                    <span>{dia.palestrante && `Palestrantes: ${dia.palestrante}`}</span>
                  </Evento>
                </Card>
              ))
            }
          </TabContent>
          <TabContent className={toggle === 2 ? 'active' : ''}>
            {
              dia2.map(dia => (
                <Card key={dia.id} onClick={() => handleModalOpen(dia)}>
                  <Informacoes>
                    <h4>{dia.horario}</h4>
                    <span>{dia.local}</span>
                  </Informacoes>
                  <Evento>
                    <h1>{dia.tema}</h1>
                    <span>
                      {dia.palestrante && `Palestrantes: ${dia.palestrante}`} {' '}
                      {dia.palestrante2 && `/ ${dia.palestrante2}`}
                      {dia.palestrante3 && `/ ${dia.palestrante3}`}
                      {dia.infos && `${dia.infos}`}
                    </span>
                  </Evento>
                </Card>
              ))
            }
          </TabContent>

          <TabContent className={toggle === 3 ? 'active' : ''}>
            {
              dia3.map(dia => (
                <Card key={dia.id} onClick={() => handleModalOpen(dia)}>
                  <Informacoes>
                    <h4>{dia.horario}</h4>
                    <span>{dia.local}</span>
                  </Informacoes>
                  <Evento>
                    <h1>{dia.tema}</h1>
                    <span>
                      {dia.palestrante && `Palestrantes: ${dia.palestrante}`}
                      {dia.miniCursos && `Palestrantes: ${dia.miniCursos[0].palestrante}`}
                      {dia.miniCursos && ` / ${dia.miniCursos[1].palestrante}`}
                      {dia.miniCursos && ` / ${dia.miniCursos[2].palestrante}`}
                      {dia.miniCursos && ` / ${dia.miniCursos[3].palestrante}`}
                      {dia.miniCursos && ` / ${dia.miniCursos[4].palestrante}`}
                    </span>
                  </Evento>
                </Card>
              ))
            }
          </TabContent>
        </TabBody>
      </Container>

      {modalOpen &&
        <ModalPalestra palestra={palestra} toggleModal={modalToggle} />
      }
      {/* dia1[10] */}
    </>
  )
}

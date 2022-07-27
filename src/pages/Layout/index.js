import React, { useState } from "react"
import { Outlet } from "react-router-dom"

import Footer from "../../components/Footer";
import Header from "../../components/Header"
import Modal from "../../components/Modal";
import SideBarHeader from "../../components/SideBarHeader";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import FormGrouping from "../../components/FormGrouping";
import { emailEnvio } from "../../services/api";
import { Alert } from "../../utils/Alert";
import Loader from "../../components/Loader";

import { Container, Content, ContentModal } from './styles'

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [assunto, setAssunto] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const enviarMensagemContato = async () => {
    try {
      setIsLoading(true);
      const dados = {
        nome,
        emailContato: email,
        assunto,
        mensagem
      }

      await emailEnvio('mail', dados);
      toggleModal();
      Alert('Sucesso', 'E-mail enviado com sucesso, aguarde que responderemos em breve.');
    }catch (error) {
      const status = error.response.data
      Alert('Atenção', 'Ocorreu um erro ao enviar e-mail: ' + status, 'error');
    }finally{
      setIsLoading(false);
    }
  }

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    setAssunto('');
    setNome('');
    setEmail('');
    setMensagem('');
  }

  return (
    <Container>
      {isLoading && <Loader />}

      <SideBarHeader isOpen={isOpen} toggle={toggle} modalOpened={toggleModal} />
      <Header toggle={toggle} modalOpened={toggleModal} />

      <Content>
        <Outlet />
      </Content>
      <Footer />

      {modalIsOpen && (
        <Modal
          title='SemaBio - Fale conosco'
          btnLabel='Enviar mensagem'
          close={toggleModal}
          func={enviarMensagemContato}
        >
          <ContentModal>
            <FormGrouping>
              <Input
                autoFocus
                placeholder="Assunto *"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
              />
            </FormGrouping>
            <FormGrouping>
              <Input
                placeholder="Nome *"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </FormGrouping>

            <FormGrouping>
              <Input
                placeholder="Email para contato *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGrouping>

            <FormGrouping>
              <TextArea
                placeholder="Escreva sua mensagem *"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </FormGrouping>
          </ContentModal>

        </Modal>
      )}
    </Container>
  );
}

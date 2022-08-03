import React, { useState } from "react"
import { Outlet } from "react-router-dom"

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SideBarHeader from "../../components/SideBarHeader";
import Loader from "../../components/Loader";

import { Container, Content } from './styles'
import ModalContato from "../../components/ModalContato";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }



  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
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
        <ModalContato toggleModal={toggleModal} setLoading={setIsLoading} />
      )}
    </Container>
  );
}

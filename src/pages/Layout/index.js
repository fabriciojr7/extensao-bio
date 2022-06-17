import React, { useState } from "react"
import { Outlet } from "react-router-dom"

import Footer from "../../components/Footer";
import Header from "../../components/Header"
import SideBarHeader from "../../components/SideBarHeader";

import { Container, Content } from './styles'

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <SideBarHeader isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <Content>
        <Outlet />
      </Content>

      <Footer />
    </Container>
  );
}

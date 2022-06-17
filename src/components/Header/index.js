import {
  Line, Container, NavLink, Bars, NavMenu,
  NavBtn,
  // NavBtnLink
} from "./styles"

import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";

import logo from '../../assets/images/logo-bio.png';

export default function Header({ toggle }) {
  return (
    <>
      <Line />
      <Container>
        <NavLink className="logo" to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <NavMenu>
          <NavLink to="/programacao" >
            Programação
          </NavLink>
          <NavLink to="/apresentacao" >
            Apresentação
          </NavLink>
          <NavLink to="/organizacao" >
            Organização
          </NavLink>
          <NavLink to="/resumos" >
            Resumos
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
          href="https://www.instagram.com/semabio.cptl/" target="_blank" rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <AiOutlineMail />

          {/* <NavBtnLink to="/">Inscrever-se</NavBtnLink> */}
        </NavBtn>
        <Bars onClick={toggle} />
      </Container>
    </>
  )
}

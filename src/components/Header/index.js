import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";

import {
  Line, Container, Logo, NavLink, Bars, NavMenu,
  NavBtn, NavOptions
  // NavBtnLink
} from "./styles"

import logo from '../../assets/images/logo-bio.png';

export default function Header({ toggle, modalOpened }) {
  return (
    <>
      <Line />
      <Container>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
        <NavMenu>
          <NavLink to="/" >
            Home
          </NavLink>

          <NavOptions>
            <p>SemaBio</p>
            <ul >
              <Link to='/apresentacao'>
                <li>Apresentação</li>
              </Link>
              <Link to='/organizacao'>
                <li>Organização</li>
              </Link>
              <Link to='programacao'>
                <li>Programação</li>
              </Link>
            </ul>
          </NavOptions>

          <NavOptions>
            <p>Resumos</p>
            <ul >
              <Link to='/envioresumo'>
                <li>Envio de resumo</li>
              </Link>
              <a
                href="https://res.cloudinary.com/arquivosfb/image/upload/v1658797408/Normas_XIII_Semabio.docx_quqgsl.pdf"
                target='blank'>
                <li>Normas para submissão</li>
              </a>
            </ul>
          </NavOptions>

          <NavLink to="/inscricao" >
            Inscreva-se
          </NavLink>

          <NavLink className="btn" to="/login" >
            Acesso organização
          </NavLink>
        </NavMenu>

        <NavBtn>
          <a
            href="https://www.instagram.com/semabio.cptl/" target="_blank" rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <AiOutlineMail onClick={modalOpened} />
        </NavBtn>
        <Bars onClick={toggle} />
      </Container>


    </>
  )
}

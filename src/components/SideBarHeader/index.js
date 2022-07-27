import {
  Container, Icon, CloseIcon,
  SideBarContent, SideBarMenu, SideBarLink, SideBtnContainer,
} from "./styles";

import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";


export default function SideBarHeader({ isOpen, toggle, modalOpened }) {
  return (
    <Container isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarContent>
        <SideBarMenu>
          <SideBarLink to="/">Home</SideBarLink>
          <SideBarLink to="/apresentacao" >Apresentação</SideBarLink>
          <SideBarLink to="/organizacao" >Organização</SideBarLink>
          <SideBarLink to="/programacao">Programação</SideBarLink>
          <SideBarLink to="/envioresumo" >Envio de resumos</SideBarLink>
          <SideBarLink to="/inscricao" >Inscreva-se</SideBarLink>
          <SideBarLink to="/login" >Acesso organização</SideBarLink>
        </SideBarMenu>
        <SideBtnContainer>
          <a
            href="https://www.instagram.com/semabio.cptl/" target="_blank" rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <AiOutlineMail onClick={modalOpened} />
        </SideBtnContainer>
      </SideBarContent>
    </Container>
  )
}

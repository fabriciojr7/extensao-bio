import {
  Container, Icon, CloseIcon,
  SideBarContent, SideBarMenu, SideBarLink, SideBtnContainer,
  // SideBarBtn
} from "./styles";

import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";


export default function SideBarHeader({ isOpen, toggle }) {
  return (
    <Container isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarContent>
        <SideBarMenu>
          <SideBarLink to="/programacao">Programacao</SideBarLink>
          <SideBarLink to="/apresentacao" >Apresentação</SideBarLink>
          <SideBarLink to="/organizacao" >Organização</SideBarLink>
          <SideBarLink to="/resumos" >Resumos</SideBarLink>
        </SideBarMenu>
        <SideBtnContainer>
          <a
            href="https://www.instagram.com/semabio.cptl/" target="_blank" rel="noopener noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <AiOutlineMail />
          {/* <SideBarBtn to="/">Inscreva-se</SideBarBtn> */}
        </SideBtnContainer>
      </SideBarContent>
    </Container>
  )
}

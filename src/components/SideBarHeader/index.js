import {
  Container, Icon, CloseIcon,
  SideBarContent, SideBarMenu, SideBarLink, SideBtnContainer,
  SideBarLinkExterno
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
          <SideBarLinkExterno
            href="https://res.cloudinary.com/arquivosfb/image/upload/v1658797408/Normas_XIII_Semabio.docx_quqgsl.pdf"
            target='blank'>
            Normas para submissão
          </SideBarLinkExterno>
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

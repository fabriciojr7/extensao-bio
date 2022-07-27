import { Outlet, Link } from "react-router-dom";

import { Container, Menu, ContentMenu, Logo, ListMenu, Content } from "./styles";

import semabio from "../../../assets/images/semana-bio.png"

export default function LayoutAdm() {
  return <Container>
    <Menu>
      <ContentMenu>
        <Logo>
          <img src={semabio} alt='SemaBio 2022' />
        </Logo>

        <ListMenu>
          <Link to='/adm'>
            <li>Registrar presenças</li>
          </Link>

          <Link to='/adm/inscritos'>
            <li>Inscritos</li>
          </Link>

          <Link to='/adm/resumos'>
            <li>Resumos</li>
          </Link>
        </ListMenu>

      </ContentMenu>
    </Menu>

    <Content>
      <Outlet />
    </Content>
  </Container>
}

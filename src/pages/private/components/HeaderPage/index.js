import { useContext } from "react";
import { AuthContext } from "../../../../context/auth";
import { FaSignOutAlt } from "react-icons/fa";

import { Container } from "./styles";

export default function HeaderPage({ title }) {
  const { logout } = useContext(AuthContext);

  return <Container>
    <h1>{title}</h1>
    <FaSignOutAlt size={'30px'} onClick={logout} />
  </Container>
}

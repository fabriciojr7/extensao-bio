import { useState, useContext } from "react";

import FormGrouping from "../../components/FormGrouping";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AuthContext } from "../../context/auth";

import logo from "../../assets/images/logo-bio.png"

import { Container, Form, Logo } from "./styles";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login(email, senha);
  }

  return (
    <Container>
      <Form>
        <Logo>
          <img src={logo} alt="Logo principal semana-bio" />
        </Logo>

        <FormGrouping>
          <Input
            autoFocus
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGrouping>

        <FormGrouping>
          <Input
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </FormGrouping>

        <FormGrouping>
          <Button
            type="button"
            onClick={handleLogin}
          >
            Acessar
          </Button>
        </FormGrouping>


      </Form>
    </Container>
  )
}

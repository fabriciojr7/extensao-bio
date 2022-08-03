import ReactDOM from 'react-dom';
import { Overlay, Container, Content, Footer } from "./styles";
import Button from "../Button";

export default function Modal({
  children, btnLabel, title, close, func, cancelVisible }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container >
        <h1>{title}</h1>
        <Content>
          {children}
        </Content>
        <Footer>
          {!cancelVisible ? (
            <Button
              className="cancel"
              type="button"
              onClick={close}
            >
              Cancelar
            </Button>
          ) : null}

          <Button
            type="button"
            onClick={func}
          >
            {btnLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('root-modal'),
  );
}

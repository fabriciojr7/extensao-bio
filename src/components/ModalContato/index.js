import { useState } from "react";
import FormGrouping from "../FormGrouping";
import Input from "../Input";
import Modal from "../Modal"
import TextArea from "../TextArea";
import useErrors from "../../hooks/useErrors";
import { emailEnvio } from "../../services/api";
import { Alert } from "../../utils/Alert";

import { ContentModal } from "./styles";

export default function ModalContato({ toggleModal, setLoading }) {
  const [assunto, setAssunto] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');


  const { setError, removeError, getErrorsMEssageByFieldName } = useErrors();


  const handleAssuntoChange = (e) => {
    setAssunto(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'assunto', message: 'O assunto é obrigatório.' });
    } else {
      removeError('assunto');
    }
  }

  const handleNomeChange = (e) => {
    setNome(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'nome', message: 'O nome é obrigatório.' });
    } else {
      removeError('nome')
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'email', message: 'O e-mail é obrigatório.' });
    } else {
      removeError('email')
    }
  }

  const handleMensagemChange = (e) => {
    setMensagem(e.target.value);

    if (!e.target.value.trim()) {
      setError({ field: 'mensagem', message: 'A mensagem é obrigatória.' });
    } else {
      removeError('mensagem')
    }
  }

  const checkFormValid = () => {
    let errors = true;
    if (!assunto.trim()) {
      setError({ field: 'assunto', message: 'O assunto é obrigatório.' });
      errors = false;
    }

    if (!nome.trim()) {
      setError({ field: 'nome', message: 'O nome é obrigatório.' });
      errors = false;
    }

    if (!email.trim()) {
      setError({ field: 'email', message: 'O e-mail é obrigatório.' });
      errors = false;
    }

    if (!mensagem.trim()) {
      setError({ field: 'mensagem', message: 'A mensagem é obrigatória.' });
      errors = false;
    }

    return errors;
  }

  const enviarMensagemContato = async () => {
    if (checkFormValid()) {
      try {
        setLoading(true);
        const dados = {
          nome,
          emailContato: email,
          assunto,
          mensagem
        }

        await emailEnvio('mail', dados);
        toggleModal();
        Alert('Sucesso', 'E-mail enviado com sucesso, aguarde que responderemos em breve.');
      } catch (error) {
        const status = error.response.data
        Alert('Atenção', 'Ocorreu um erro ao enviar e-mail: ' + status, 'error');
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <Modal
      title='SemaBio - Fale conosco'
      btnLabel='Enviar mensagem'
      close={toggleModal}
      func={enviarMensagemContato}
    >
      <ContentModal>
        <FormGrouping error={getErrorsMEssageByFieldName('assunto')}>
          <Input
            error={getErrorsMEssageByFieldName('assunto')}
            autoFocus
            placeholder="Assunto *"
            value={assunto}
            onChange={handleAssuntoChange}
          />
        </FormGrouping>

        <FormGrouping error={getErrorsMEssageByFieldName('nome')}>
          <Input
            error={getErrorsMEssageByFieldName('nome')}
            placeholder="Nome *"
            value={nome}
            onChange={handleNomeChange}
          />
        </FormGrouping>

        <FormGrouping error={getErrorsMEssageByFieldName('email')}>
          <Input
            error={getErrorsMEssageByFieldName('email')}
            placeholder="Email para contato *"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGrouping>

        <FormGrouping error={getErrorsMEssageByFieldName('mensagem')}>
          <TextArea
            error={getErrorsMEssageByFieldName('mensagem')}
            placeholder="Escreva sua mensagem *"
            value={mensagem}
            onChange={handleMensagemChange}
          />
        </FormGrouping>
      </ContentModal>
    </Modal>
  )
}

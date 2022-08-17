import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  padding: 0 16px;

  form {
    width: 100%;
    max-width: 800px;

    textarea.texto{
      height: 400px;
    }
    p{
      text-align: end;
      padding-bottom: 8px;
      color: ${({theme}) => theme.colors.gray[500]};

      &.obs{
        text-align: left;
      }
    }
  }

`

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin: auto;
  margin-bottom: 16px;
  margin-top: 16px;

`

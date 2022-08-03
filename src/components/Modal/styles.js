import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  z-index: 100;
`

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  h1{
    font-size: 22px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }
`

export const Content = styled.div`
  margin-top: 20px;
`

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel{
    background: ${({ theme }) => theme.colors.danger.main};
    border: none;
    color: #fff;
    font-size: 16px;
    margin-right: 8px;

    &:hover{
      background: ${({ theme }) => theme.colors.danger.light};
    }
  }
`

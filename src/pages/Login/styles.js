import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 16px;

  background-image: linear-gradient(to bottom right,
    ${({ theme }) => theme.colors.brown.dark},
    ${({ theme }) => theme.colors.brown.main},
    ${({ theme }) => theme.colors.primary.main},
    ${({ theme }) => theme.colors.primary.light}
  );
`

export const Logo = styled.div`
  text-align: center;
  width: 100%;
  height: 200px;
  margin: 16px 0;

  img{
    height: inherit;
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  height: 500px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.08);
  padding: 0 12px;

  background: ${({ theme }) => theme.colors.background};
  color: #fff;
`

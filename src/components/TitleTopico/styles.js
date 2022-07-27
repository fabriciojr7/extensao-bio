import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  width: 100%;
  background-image: linear-gradient(to bottom right,
  ${({ theme }) => theme.colors.brown.dark},
  ${({ theme }) => theme.colors.brown.dark},
  ${({ theme }) => theme.colors.brown.main},
  ${({ theme }) => theme.colors.brown.light},
  ${({ theme }) => theme.colors.brown.lighter}
  );
  padding: 16px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fff;

  @media screen and (max-width: 600px){
    font-size: 20px;
  }
`

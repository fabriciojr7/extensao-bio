import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  background-image: linear-gradient(to right,
    ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors.ternary.light},
    ${({ theme }) => theme.colors.ternary.dark},
    ${({ theme }) => theme.colors.ternary.light},
    ${({ theme }) => theme.colors.background}
    );

  h1{
    font-size: 40px;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.brown.dark};
    z-index: 1;
  }

  @media screen and (max-width: 600px){
    h1{
      font-size: 32px;
    }
  }
`

export const Image = styled.div`
  position: relative;
  width: 250px;
  height: inherit;
  background-image: ${({ imagem }) => `url(${imagem})`};
  background-size: cover;
  background-position: center;
  z-index: 0;

  &:first-child{
    position: absolute;
    left: 10px;
    z-index: 0;
  }
  &:last-child{
    position: absolute;
    right: 10px;
    z-index: 0;
  }

  @media screen and (max-width: 800px){
    &:first-child{
      left: -50px;
    }
    &:last-child{
      right: -50px;
    }
  }


`

import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 0 20px;
  padding-bottom: 24px;
`

export const Teste = styled.div`
  width: 100%;
  min-height: 100%;
  background: ${({ theme }) => theme.colors.primary.lighter};;

  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  overflow: hidden;
`

export const Faixa = styled.div`
  width: 100%;
  height: 400px;
  padding: 16px 0;

  /* background-image: linear-gradient(to right,
    ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors.secondary.light},
    ${({ theme }) => theme.colors.secondary.main},
    ${({ theme }) => theme.colors.secondary.dark},
    ${({ theme }) => theme.colors.secondary.main},
    ${({ theme }) => theme.colors.secondary.light},
    ${({ theme }) => theme.colors.background}
  ); */

  @media screen and (max-width: 880px){
    height: 300px;
  }

`

export const ContainerFaixa = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 880px){
    flex-direction: column;
  }
`

export const LogoEvento = styled.div`
  height: 100%;
  img{
    height: inherit;
  }

  @media screen and (max-width: 880px){
    height: 200px;
    img{
      height: inherit;
    }
  }

`


export const Text = styled.div`
  text-align: center;

  h1{
    font-size: 42px;
    color: ${({ theme }) => theme.colors.gray[600]};

    span{
      &:first-child{
        padding: 16px;


        border-radius: 50%;
        background: ${({ theme }) => theme.colors.brown.light};
        color: #fff;
        margin-right: 16px;

        &::after{
        width: 100px;
        height: 100px;
        background: ${({ theme }) => theme.colors.brown.light};
      }
      }

      &:last-child{
        color: ${({ theme }) => theme.colors.primary.dark};
      }
    }
  }
  h2{
    font-size: 24px;
    color: ${({ theme }) => theme.colors.brown.light};
  }

  @media screen and (max-width: 1100px){
    h1{
      font-size: 34px;
    }
    h2{
      font-size: 20px;
    }
  }

  @media screen and (max-width: 950px){
    h1{
      font-size: 30px;
    }
    h2{
      font-size: 18px;
    }
  }

  @media screen and (max-width: 500px){
    h1{
      font-size: 20px;
    }
    h2{
      font-size: 16px;
    }
  }
`
export const Content = styled.div`
  width: 100%;
  max-width: 820px;
  margin: auto;
  margin-top: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 8px;
  h3{
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 8px;
  }
  p{
    font-size: 16px;
    span{
      font-weight: bold;
    }
  }

  button{
    width: 300px;
    margin-top: 24px;
  }

  @media screen and (max-width: 700px){
    h3{
      font-size: 20px;
    }
    p{
      font-size: 14px;
    }
  }

`

export const Btn = styled(Link)`
  width: 300px;
  text-align: center;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.secondary.main};
  padding: 16px 40px;
  color: #fff;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all .2s ease-in;
  margin-top: 24px;

  &:hover{
    background: ${({ theme }) => theme.colors.secondary.lighter};
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`


import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'

export const Line = styled.div`
  background-image: linear-gradient(to right,
    ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors.secondary.main},
    ${({ theme }) => theme.colors.secondary.dark},
    ${({ theme }) => theme.colors.secondary.main},
    ${({ theme }) => theme.colors.background}
    );
  height: 20px;
`

export const Container = styled.header`
  background: ${({theme}) => theme.colors.primary.main};
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  position: relative;
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active{
    color: ${({theme}) => theme.colors.secondary.main};
  }
  &:hover{
    color: ${({theme}) => theme.colors.secondary.main};
    transition: 0.2s ease-in-out;
  }

  &.logo{
    img{
      height: 120px;
    }
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    color: ${({theme}) => theme.colors.secondary.main};
    font-size: 24px;
    margin: 0 20px;
    cursor: pointer;
    transition: 0.2s color ease-in-out;

    &:hover{
      color: ${({theme}) => theme.colors.secondary.lighter};
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

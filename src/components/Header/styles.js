import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

export const Line = styled.div`
  background-image: linear-gradient(to right,
    ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors.ternary.light},
    ${({ theme }) => theme.colors.ternary.dark},
    ${({ theme }) => theme.colors.ternary.light},
    ${({ theme }) => theme.colors.background}
    );
  height: 20px;
`

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.brown.lighter};
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 1;
  position: relative;
  font-size: 16px;
`

export const Logo = styled.div`
  padding: 0 1rem;
  height: 100px;

  img{
    height: inherit;
  }
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  transition: color 0.2s ease-in;

  &:hover{
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  &.btn{
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.primary.dark};
    padding: 6px;
    background: ${({ theme }) => theme.colors.primary.dark};
    transition: all 0.2s ease-in-out;
    &:hover{
      color: #fff;
      background: ${({ theme }) => theme.colors.primary.light};
      border-color: ${({ theme }) => theme.colors.primary.light};
    }
  }
`

export const NavOptions = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  margin-left: 8px;
  color: #fff;
  transition: background .2s ease-in;

  display: inline-block;
  position: relative;

  letter-spacing: 1px;  

  &:hover{
    color: ${({ theme }) => theme.colors.primary.dark};
    
    ul{
      padding-top: 16px;
      display: block;            
      li:hover{
        background: ${({ theme }) => theme.colors.brown.light};
      }                      
    }
  }

  ul{
    display: none;
    width: 200px;
    position: absolute;
    z-index: 1;
    
    li{
      padding: 12px 8px;
      padding-left: 16px;
      background: ${({ theme }) => theme.colors.brown.main};
      color: #fff;                       
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
  svg{
    color: ${({ theme }) => theme.colors.gray[900]};
    font-size: 24px;
    margin: 0 12px;
    cursor: pointer;
    transition: 0.2s color ease-in-out;

    &:hover{
      color: ${({ theme }) => theme.colors.secondary.lighter};
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

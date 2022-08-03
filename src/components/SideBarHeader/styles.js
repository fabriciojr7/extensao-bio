import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const Container = styled.aside`
  position:fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${({theme}) => theme.colors.brown.main};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SideBarContent = styled.div`
  color: #fff;
`

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6,60px);
  }
`

export const SideBarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &.active{
    color: ${({theme}) => theme.colors.secondary.main};
  }
  &:hover{
    color: ${({theme}) => theme.colors.secondary.main};
    transition: 0.2s ease-in-out;
  }

  &:last-child{
    margin-top: 16px;
  }
`

export const SideBarLinkExterno = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &.active{
    color: ${({theme}) => theme.colors.secondary.main};
  }
  &:hover{
    color: ${({theme}) => theme.colors.secondary.main};
    transition: 0.2s ease-in-out;
  }

  &:last-child{
    margin-top: 16px;
  }
`



export const SideBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  svg{
    color: ${({theme}) => theme.colors.secondary.main};
    font-size: 32px;
    margin: 0 20px;
    cursor: pointer;
    transition: 0.2s color ease-in-out;

    &:hover{
      color: ${({theme}) => theme.colors.secondary.lighter};
    }
  }
`

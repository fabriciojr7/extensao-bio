import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: ${({theme}) => theme.colors.background};
`
export const Menu = styled.div`
  width: 260px;
  padding: 8px;
`
export const ContentMenu = styled.div`
  height: 100%;
  border-radius: 8px;
  background: ${({theme}) => theme.colors.brown.light};
`

export const Logo = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  border: 1px solid ${({theme}) => theme.colors.brown.lighter};
  img{
    width: 200px;
  }
`

export const ListMenu = styled.ul`
  margin-top: 12px;
  font-size: 22px;

  li{
    padding: 8px;
    cursor: pointer;
    color: #fff;

    &:hover{
      background: ${({theme}) => theme.colors.brown.lighter};
    }
  }
`

export const Content = styled.div`
  flex: 1;
  padding: 8px 16px;
  overflow-y: auto;
`

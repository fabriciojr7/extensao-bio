import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 8px;
  background: ${({theme}) => theme.colors.brown.lighter};
  z-index: 0;

  @media screen and (max-width: 580px){
    height: 180px;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 580px){
    flex-direction: column;
    justify-content: center;
  }

`

export const AreaImg = styled.div`
  height: 100%;

  img{
    height: inherit;
  }

  &:last-child{
    img{
      width: 280px;
    }
  }

  @media screen and (max-width: 580px){
    height: 100px;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 700px){
    &:last-child{
      display: none;
    }
  }
  @media screen and (max-width: 1000px){
    &:last-child{
      img{
        width: 200px;
      }
    }
  }
`

export const Text = styled.div`
  text-align: center;
  h3{
    font-size: 16px;
    color: #fff;
  }
`

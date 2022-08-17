import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 160px;
  margin: auto;
  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 10px rgba(0,0,0,0.09);
  border-radius: 8px;

  @media screen and (max-width: 1100px){
    flex-direction: column;
    height: 180px;
  }

  @media screen and (max-width: 850px){
    flex-wrap: wrap;
    height: auto;
  }
`
export const Titulo = styled.div`
  width: 200px;

  p{
    color:  ${({ theme }) => theme.colors.brown.main};
    font-size: 32px;
    font-weight: bold;
    margin-left: 8px;
    text-align: center;
  }

  @media screen and (max-width: 800px){
    p{
      position: relative;
      top: 5px;
      padding-bottom: 16px;
    }
  }
`

export const AreaImage = styled.div`
  display: flex;

  img{
    padding: 8px;
    height: 140px;
    width: 180px;
  }

  @media screen and (max-width: 860px){
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;

    img{
      height: 140px;
    }
  }

  @media screen and (max-width: 660px){

  }
`

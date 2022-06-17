import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  padding-bottom: 24px;
`

export const TabHead = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-around;
`;

export const Tab = styled.div`
  flex: 1;
  padding: 8px;
  text-align: center;
  border-bottom: 2px solid ${({theme}) => theme.colors.ternary.lighter};
  cursor: pointer;

  h4{
    color: ${(props) => props.theme.colors.ternary.lighter};
    font-size: 18px;
  }
  p{
    color: ${(props) => props.theme.colors.ternary.dark};
    font-size: 14px;
  }

  &.active {
    h4{
      color: ${({ theme }) => theme.colors.secondary.dark};
    }
    background: ${({ theme }) => theme.colors.secondary.lighter};
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary.dark};
  }

  &:hover{
    h4{
      color: ${({theme}) => theme.colors.secondary.dark};
    }
    border-bottom: 2px solid ${({theme}) => theme.colors.secondary.dark};
  }
`;

export const TabBody = styled.div`
  margin-top: 16px;
`;

export const TabContent = styled.div`
  display: none;
  &.active{
    display: block;
  }
`;

export const Card = styled.div`
  width: 100%;
  min-height: 100px;
  margin-bottom: 4px;
  display: flex;
`

export const Informacoes = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 20px;



  h4{
    color: ${({theme}) => theme.colors.primary.main};
    font-size: 18px;
    font-weight: 400;
  }

  span{
    color: ${({theme}) => theme.colors.primary.main};
    font-size: 14px;
    padding-right: 4px;
    border-right: 3px solid ${({theme}) => theme.colors.secondary.dark};
  }

  @media screen and (max-width:600px){
    width: 140px;
    h4{
      font-size: 16px;
    }
    span{
      font-size: 12px;
    }
  }

`

export const Evento = styled.div`
  flex: 1;
  padding-left: 20px;
  border-left: 2px solid ${({ theme }) => theme.colors.secondary.dark};

  h3{
    font-size: 22px;
    color: ${({theme}) => theme.colors.primary.dark};
    margin-bottom: 8px;
  }
  span{
    font-size: 14px;
    color: ${({theme}) => theme.colors.primary.dark};
  }

  @media screen and (max-width:600px){
    h3{
      font-size: 18px;
    }
    span{
      font-size: 12px;
    }
  }
`

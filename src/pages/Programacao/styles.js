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
  border-bottom: 2px solid ${({theme}) => theme.colors.ternary.dark};
  cursor: pointer;

  h4{
    color: ${(props) => props.theme.colors.gray[500]};
    font-size: 18px;
  }
  p{
    color: ${(props) => props.theme.colors.primary.dark};
    font-size: 14px;
  }

  &.active {
    background: ${({ theme }) => theme.colors.primary.lighter};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary.dark};

    h4{
      color: ${({ theme }) => theme.colors.primary.dark};
    }

    p{
      color: ${(props) => props.theme.colors.gray[500]};
    }    
  }

  &:hover{
    border-bottom: 2px solid ${({theme}) => theme.colors.primary.dark};

    h4{
      color: ${({theme}) => theme.colors.primary.dark};
    }
    p{
      color: ${(props) => props.theme.colors.gray[500]};
    }    
  }
`;

export const TabBody = styled.div`
  width: 100%;
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
  cursor: pointer;
  border-radius: 4px;
  padding: 8px;

  &:hover{
    background: ${({theme}) => theme.colors.ternary.light};
  }
`

export const Informacoes = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 20px;

  h4{
    color: ${({theme}) => theme.colors.gray[900]};
    font-size: 18px;
    font-weight: 400;
  }

  span{
    color: ${({theme}) => theme.colors.primary.main};
    font-size: 14px;
    padding-right: 4px;
    border-right: 3px solid ${({theme}) => theme.colors.primary.dark};
    margin-top: 8px;
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
  border-left: 2px solid ${({ theme }) => theme.colors.primary.dark};

  h1{
    font-size: 20px;
    color: ${({theme}) => theme.colors.gray[900]};
    margin-bottom: 8px;
  }
  span{
    font-size: 14px;
    color: ${({theme}) => theme.colors.gray[500]};
  }

  @media screen and (max-width:600px){
    h1{
      font-size: 18px;
    }
    span{
      font-size: 12px;
    }
  }
`

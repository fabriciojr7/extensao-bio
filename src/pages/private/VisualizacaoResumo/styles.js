import styled from "styled-components";

export const Container = styled.div`
  color: ${({theme}) => theme.colors.gray[900]};

  span{
    color: ${({theme}) => theme.colors.primary.dark};
  }
  h2{
    font-size: 20px;
    margin-bottom: 16px;
  }
  p{
    font-size: 18px;
    text-align: justify;
    text-indent: 24px;
    letter-spacing: 1px;
    line-height: 28px;
  }
`

export const AreaVoltar = styled.div`
  text-align: center;
  padding: 16px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid ${({theme}) => theme.colors.gray[500]};

  button{
    width: 300px;
  }
`
export const Card = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.09);
  padding: 12px;
  margin-bottom: 8px;

  h1{
    text-align: center;
    font-size: 24px;
    margin-bottom: 16px;
    color: ${({theme}) => theme.colors.brown.main};
    font-weight: bold;
  }

  h2.inscricao{
    display: flex;
    align-items: center;

    span{
      margin-right: 8px;
    }
  }

  svg{
    margin-left: 16px;
    font-size: 24px;
    &.like{
      color: ${({theme}) => theme.colors.primary.main};
    }
    &.disliked{
      color: ${({theme}) => theme.colors.danger.main};
    }
  }
`

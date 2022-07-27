import styled from "styled-components";

export const Container = styled.div`
    color: ${({theme}) => theme.colors.gray[900]};

    span{
        color: ${({theme}) => theme.colors.primary.dark};
    }
    h1{
        font-size: 24px;
        margin-bottom: 16px;
        color: ${({theme}) => theme.colors.brown.main};
        font-weight: bold;
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
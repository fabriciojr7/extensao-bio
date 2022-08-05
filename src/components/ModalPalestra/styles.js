import styled from "styled-components";

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow-y: auto;
  img{
    width: 130px;
    height: 150px;
  }

  p.titulo{
    text-align: center;
    span{
      font-weight: bold;
    }
  }

  div.miniCurso{
    &:first-child{
      margin-top: 0;  
    }
    margin-top: 24px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  }
`

export const Resumo = styled.div`
  margin-top: 16px;
  p{
    text-align: justify;
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`

export const Palestrante = styled.div`
  text-align: center;
  margin: 16px 0;
  img{
    margin: 16px 0;
  }

  span{
    font-weight: bold;
  }
`

export const TemaMiniCurso = styled.p`
  text-align: center;
  span{
    font-weight: bold;
  }
`

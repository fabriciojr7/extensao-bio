import styled from "styled-components";

export const Container = styled.div`
  svg{
    font-size: 20px;
    &.presenca{
      color: ${({ theme }) => theme.colors.primary.dark};
    }
    &.falta{
      color: ${({ theme }) => theme.colors.danger.dark};
    }
  }

  .headerTable{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    font-weight: bold;
  }


  table{
    tr{
      &.pendente{
        background: ${({ theme }) => theme.colors.danger.lighter};
      }
    }

    td {
      &.palestra{
        width: 5%;
      }
      &.roda{
        width: 4%;
      }
      &.mini{
        width: 10%;
      }
      &.cpf{
        width: 200px;
      }

      p{
        color: ${({ theme }) => theme.colors.primary.dark};
      font-weight: bold;
      }
    }
  }
`

export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[500]};
`

export const Count = styled.div`
  h3{
    color: ${({ theme }) => theme.colors.gray[600]};
    font-size: 24px;
  }
`

export const Legenda = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-top: 48px;
`

export const Caixa = styled.div`
  width: 48px;
  height: 24px;
  background: ${({ theme }) => theme.colors.danger.lighter};
  margin-left: 16px;
`

export const Filter = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.brown.main};

  p{
    margin-right: 8px;
  }

  input{
    margin: 0 8px 0 16px;
    cursor: pointer;
    color: aqua;
  }
`

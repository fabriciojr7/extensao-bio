import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;
  td, th {
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    text-align: center;
  }

  td{
    padding: 16px;
    font-size: 14px;
    color: ${({theme}) => theme.colors.gray[600]};
    background: #fff;
    transition: background 0.2s ease-in-out;

    button{
      width: 200px;
      height: 32px;
      margin: 8px 0;
      font-size: 14px;
      color: #fff;
      border: none;
      outline: none;
      border-radius: 4px;
      background: ${({ theme }) => theme.colors.primary.main};

      &:hover{
        background: ${({ theme }) => theme.colors.primary.light};
      }
    }

    ul{
      padding: 0 20px;
      p{
        color: ${({theme}) => theme.colors.gray[900]};
        margin-bottom: 8px;
      }
    }

    select{
      margin: 8px 0;
    }

    &.local{
      p{
        transform: rotate(-90deg);
        color: ${({ theme }) => theme.colors.brown.dark};
        font-weight: bold;
      }
      width: 60px;
    }

    &.confirmada{
      color: #fff;
      background: ${({ theme }) => theme.colors.primary.main};

      button{
        background: ${({ theme }) => theme.colors.danger.main};

        &:hover{
        background: ${({ theme }) => theme.colors.danger.light};
      }
      }
    }
  }
`

export const TdIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
      color: ${({ theme }) => theme.colors.primary.dark};
      margin-right: 24px;
    }
`

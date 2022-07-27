import styled from "styled-components";

export const Container = styled.header`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.brown.light};

  h1{
    font-size: 40px;
  }

  svg{
    color: ${({ theme }) => theme.colors.brown.light};
    cursor: pointer;
    
    transition: color .2s ease-in-out;
    &:hover{
      color: ${({ theme }) => theme.colors.brown.dark};
    }
  }
`

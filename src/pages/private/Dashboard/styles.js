import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
`

export const ContentForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.gray[200]};
  margin: 24px 0;

  &:last-child{
    margin-top: 16px;
    margin-bottom: 0;    
  }
`

export const ContentDados = styled.div`
  margin-top: 24px;
  width: 100%;
  max-width: 800px;
  font-size: 20px;
  padding: 16px;
  padding-bottom: 0;
`

export const LineContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  span{
    font-size: 20px;
    width: 90px;
    color: ${({ theme }) => theme.colors.primary.dark};
  }
  h2{  
    color: ${({ theme }) => theme.colors.gray[600]};
    font-size: 20px;
  }    
`

export const ContentPresenca = styled.div`
  display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
  width: 100%;
  max-width: 600px;
  margin: auto;

  background: #fff;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.09);

  border-radius: 8px;
  
  h1{
    font-size: 24px;
    color: ${({ theme }) => theme.colors.brown.main};

    text-align: center;
    margin-bottom: 16px;
  }
`

export const Presenca = styled.ul`
  padding: 16px;

  li{
    font-size: 18px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.gray[500]};
    font-weight: bold;

    span{
      margin-right: 8px;
      color: ${({ theme }) => theme.colors.primary.dark};
    }

    button{
      border: none;
      outline: none;
      padding: 8px;
      background: ${({ theme }) => theme.colors.primary.dark};
      color: #fff;
      font-weight: bold;
      letter-spacing: 1px;
      transition: background .2s ease-in-out;

      &:hover{
        background: ${({ theme }) => theme.colors.primary.main};  
      }
    }
  }
`

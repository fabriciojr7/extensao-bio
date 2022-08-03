import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  padding: 0 16px;

  form{
    width: 100%;
    max-width: 500px;
    margin-bottom: 16px;
  }
`

export const Text = styled.p`
  text-align: justify;
  line-height: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: 16px;
  text-indent: 24px;

  margin: auto;
  max-width: 1000px;

  padding: 16px;


  span{
    color: ${({ theme }) => theme.colors.primary.dark};
    font-size: 18px;
  }
`

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

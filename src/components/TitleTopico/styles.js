import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  width: 100%;
  background-image: linear-gradient(to right,
  ${({ theme }) => theme.colors.secondary.dark},
  ${({ theme }) => theme.colors.secondary.main},
  ${({ theme }) => theme.colors.background},
  ${({ theme }) => theme.colors.secondary.main},
  ${({ theme }) => theme.colors.secondary.dark}
  );
  text-align: center;
  padding: 20px 0;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary.dark};
`

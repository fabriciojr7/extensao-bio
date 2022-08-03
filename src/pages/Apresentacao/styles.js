import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-top: 20px;
  padding: 0 20px;
  padding-bottom: 24px;
`

export const ContentText = styled.div`
  text-align: justify;
  line-height: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray[900]};

  p{
    font-size: 16px;
    text-indent: 24px;

    span{
      color: ${({ theme }) => theme.colors.primary.dark};
      font-size: 18px;
    }
  }
`

export const Box = styled.div`
  display: flex;
  padding-bottom: 20px;

  @media screen and (max-width: 700px){
    flex-direction: column;
  }
`;

export const AreaText = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AreaImage = styled.div`
  width: 480px;
  height: 620px;
  margin-left: 32px;

  img{
    width: inherit;
    height: inherit;
  }
  &.cptl{
    height: 200px;
  }

  @media screen and (max-width: 700px){
    width: 300px;

    &.cptl{
      margin: auto;
      padding-top: 20px;

      img{
        width: inherit;
      }
    }
  }

  @media screen and (max-width: 1000px){
    &.planeta{
      display: none;
    }
  }
`;

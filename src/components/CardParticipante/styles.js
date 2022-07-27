import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  height: 350px;
  margin: 8px;
  position: relative;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 1px 10px 0 ${({theme}) => theme.colors.gray[500]};

  &::before{
    content: "";
    position: absolute;
    height: 45%;
    width: 100%;
    background: linear-gradient(to left, ${({theme}) => theme.colors.primary.main}, ${({theme}) => theme.colors.primary.dark}, ${({theme}) => theme.colors.primary.main});
    border-radius: 20px 20px 0 0;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  position: relative;
  z-index: 100;
`;

export const ImageContent = styled.div`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  padding: 3px;
  background: ${({theme}) => theme.colors.primary.main};

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #fff;
  }
`;


export const InfosContent = styled.div`
  text-align: center;
  margin-top: 16px;
  color: ${({theme}) => theme.colors.brown.dark};
  h3{
    font-size: 20px;
    font-size: bold;
    height: 48px;
    margin-bottom: 8px;
  }
  h4{
    font-size: 16px;
    font-size: 500;
    color: ${({theme}) => theme.colors.primary.main};
  }

`

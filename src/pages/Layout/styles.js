import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
`

export const Content = styled.div`
  padding-bottom: 140px;

  @media screen and (max-width: 580px){
    padding-bottom: 180px;
  }
`

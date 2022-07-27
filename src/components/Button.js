import styled, { css } from 'styled-components';

export default styled.button`
    width: 100%;
    height: 52px;
    border: none;
    padding: 0 16px;
    /* background: ${({ theme }) => theme.colors.primary.main}; */
    font-size: 18px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
    transition: background 0.2s ease-in-out;
    letter-spacing: 2px;

    ${({ theme }) => css`
      background: linear-gradient(135deg, ${theme.colors.primary.dark}, ${theme.colors.brown.lighter});
      &:hover{
        background: linear-gradient(-135deg, ${theme.colors.primary.dark}, ${theme.colors.brown.lighter});
      }
    `}

    ${({ theme, danger }) => danger && css`
      background: ${theme.colors.danger.main};
      &:hover{
        background: ${theme.colors.danger.light};
      }

      &:active{
        background: ${theme.colors.danger.dark};
      }
  `}
`;

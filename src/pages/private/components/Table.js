import styled from 'styled-components';

export default styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 24px;

    thead{
        background: ${({ theme }) => theme.colors.primary.dark};

        th{
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.35px;
            color: #FFF;
            opacity: 1;
            padding: 12px;

            &.text{
              text-align: left;
            }
        }
    }

    tbody{
        td{
            font-size: 14px;
            font-weight: normal;
            letter-spacing: 0.35px;
            color: ${({ theme }) => theme.colors.gray[900]};
            padding: 8px;
            text-align: center;

            &.text{
              text-align: left;
            }
        }
        tr:nth-child(2n){
            background: #ccc;
        }
    }

    @media (max-width: 700px){
        thead{
            display: none;
        }
        &, tbody, tr, td{
            display: block;
            width: 100%;
        }
        tr{
            margin-bottom: 16px;
        }
        tbody{
            td{
                text-align: right;
                padding-left: 50%;
                position: relative;
                background: #ccc;
                border: 1px solid #dee2e685;
            }
            td:before{
                content: attr(data-title);
                position: absolute;
                left: 0;
                width: 50%;
                padding-left: 16px;
                font-weight: 600;
                font-size: 14px;
                text-align: left;
                color: ${({ theme }) => theme.colors.primary.main};
            }
        }
    }
`;

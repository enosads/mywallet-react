import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;

  table {
    width: 70%;
    border-spacing: 0 0.5rem;

    caption {
      color: #4A4A4A;
      font-weight: 600;
      font-size: 1.5rem;
      padding-top: 2rem;
    }

    th {
      color: #4A4A4A;
      font-weight: 600;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody tr {
      background-color: var(--title);
      border-radius: 0.5rem;
    }
    
    span{
      color: #4A4A4A;
      font-weight: 600;
      padding: 1rem 2rem;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      color: var(--backgroud);

      &:first-child {
        color: var(--menus);
        font-weight: 500;

      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

    }
  }
`;
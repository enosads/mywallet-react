import styled from "styled-components";
import {darken,} from "polished";


export const Container = styled.div`
  padding: 2rem;
  flex: 1;
  background-color: ${darken(0.1, '#CCC')};
  height: 25rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 2px solid var(--title);

  h2 {
    color: #4A4A4A;
    font-weight: 600;
    text-align: center;
  }

  li {
    color: #4A4A4A;
    padding: 1rem;
    background-color: var(--title);
    display: flex;
    margin: 0.5rem;
    border-radius: 0.25rem;
    justify-content: space-between;
    list-style-type: none;
  }


  .income {
    color: var(--green);
  }

  .outcome {
    color: var(--red);
  }

  .title {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .value {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
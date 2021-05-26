import styled from "styled-components";
import {darken} from "polished";

export const Container = styled.header`
  background: var(--menus);
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 2rem 4rem;
  border-bottom: 1px solid var(--title);

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid var(--title);
    color: var(--title);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--title);
    margin-left: auto;
    text-transform: capitalize;
    background-color: var(--selected);
    color: var(--title);
    padding: 0.5rem 1rem;
    flex-direction:row;
    cursor: pointer;
    border-radius: 0.5rem;

    transition: background-color 0.2s;

    span {
      margin: 0 1rem;
    }

    &:hover {
      background-color: ${darken(0.55, "#CCC")}
    }
  }
`
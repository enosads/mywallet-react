import styled from "styled-components";
import {darken} from "polished";

export const Container = styled.nav`
  background: var(--menus);
  width: 20rem;
  height: calc(100vh - 4.1rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    height: 4rem;
    color: var(--title);
    list-style-type: none;
    padding: 1.5rem;
    margin-top: 0.5rem;
    border-radius: 0 1rem 1rem 0;
    transition: background-color 0.2s;


    &.isActive {
      background-color: var(--selected);
    }

    &:not(.isActive):hover {
      background-color: ${darken(0.55, "#CCC")}
    }
  }

`
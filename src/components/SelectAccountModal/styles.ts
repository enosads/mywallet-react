import styled from "styled-components";
import {darken,} from "polished";

export const Container = styled.form`
  h2 {
    color: var(--title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .btnSave {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: #33CC95;
    border: 0;
    color: #FFF;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

interface RadioBoxProps {
    isActive: boolean;
}


export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background-color: ${(props: RadioBoxProps) => props.isActive
          ? darken(0.3, '#A9C3BB')
          : 'transparent'
  };
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  transition: border-color 0.2s;


  img {
    height: 20px;
    width: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--title);
  }

  & + button {
    margin-top: 1rem;
  }
`
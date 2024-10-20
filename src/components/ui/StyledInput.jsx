import styled from "styled-components";

export const StyledInput = styled.input`
  max-width: 40rem;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  outline: none;
  /* border: 1px solid var(--color-white); */
  border: none;
  background-color: var(--color-secondary-background);
  font-size: var(--font-size-small);
  &:focus {
    border-color: var(--color-jedi-blue-darker);
  }

  &::placeholder {
    color: #aaa;
  }

  
`;

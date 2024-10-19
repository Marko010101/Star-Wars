import styled from "styled-components";

export const StyledDisplayItem = styled.section`
  /* margin-top: 3rem; */
  padding: 3rem 0 8rem 0;
  grid-column: 1 / -1;
  & > h3 {
    margin: 0 0 2rem 2rem;
    color: var(--color-white);
    letter-spacing: 3px;
    font-size: var(--font-size-huge);
  }
`;

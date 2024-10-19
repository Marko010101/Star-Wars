import styled from "styled-components";

export const StyledHiddenDetails = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--color-secondary-background);
  border-radius: 0.8rem;
  padding: 2rem;
  width: 100%;
  color: var(--color-white);

  h3 {
    font-size: var(--font-size-large);
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
    line-height: 1.4;
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-regular);
  }

  span {
    font-size: var(--font-size-big);
    font-weight: var(--font-weight-semi-bold);
  }
`;

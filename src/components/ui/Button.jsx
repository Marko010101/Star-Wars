import styled from "styled-components";

const Button = ({ children, isClickable, action, isActive }) => {
  return (
    <StyledButton
      onClick={isClickable ? action : undefined}
      $isClickable={isClickable}
      $isActive={isActive}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 10rem;
  padding: 1rem 1.6rem;
  background-color: ${({ $isActive, $isClickable }) =>
    $isClickable && $isActive
      ? "var(--color-jedi-blue-darker)"
      : "var(--color-jedi-blue)"};
  border-radius: 0.5rem;
  color: ${({ $isClickable }) =>
    $isClickable ? "var(--color-white)" : "var(--color-secondary-background)"};
  width: calc(max-content + 2rem);

  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "default")};

  &:hover {
    background-color: ${({ $isActive }) =>
      $isActive
        ? "var(--color-jedi-blue-darker)"
        : "var(--color-jedi-blue-dark)"};
  }

  @media screen and (max-width: 576px) {
    padding: 1rem;
    font-size: var(--font-size-small);
    min-width: 7rem;
  }
`;

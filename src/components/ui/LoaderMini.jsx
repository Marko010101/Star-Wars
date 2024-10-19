import styled, { css } from "styled-components";

const LoaderMini = styled.div`
  width: 4rem;
  height: 4rem;
  border: 0.4rem solid var(--color-white);
  ${({ size }) =>
    size === "small" &&
    css`
      width: 1.7rem;
      height: 1.7rem;
      border: 0.2rem solid var(--color-white);
    `}
  ${({ size }) =>
    size === "fullPage" &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}

  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

LoaderMini.defaultProps = {
  size: "small",
};

export default LoaderMini;

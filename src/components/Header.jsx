import styled from "styled-components";
import { Link } from "react-router-dom";

import StarWarsHeader from "../assets/starWarsHeader.svg?react";
// import StarWarsHeader from "../assets/StarWarsIcon.svg?react";

const StyledHeader = styled.div`
  height: 10rem;
  border-bottom: 1px solid var(--color-secondary-background);
  display: flex;
  align-items: center;

  & > div {
    max-width: var(--site-width);
    width: 100%;
    margin: 0 auto;
  }

  & svg {
    margin-top: -4rem;
    height: 13rem;
    width: 13rem;
  }
  @media screen and (max-width: 1200px) {
    padding: 0 2rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <StarWarsHeader />
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;

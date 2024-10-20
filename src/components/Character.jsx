import { Link } from "react-router-dom";
import styled from "styled-components";
import { getNumberFromUrl } from "../utils/getNumberFromUrl.js";

const CharacterCard = styled(Link)`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 5.5rem;

  border: 0.1rem solid var(--color-secondary-background);
  border-radius: 0.8rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    box-shadow: 2px 2px 5px var(--color-secondary-background);
    transform: scale(1.01);
    cursor: pointer;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 0.5rem;

    & > p {
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-regular);
    }
  }

  & > h2 {
    font-size: var(--font-size-huge);
    font-weight: var(--font-weight-semi-bold);
    margin-bottom: 0.2rem;
    align-self: center;
    width: max-content;
  }

  @media screen and (max-width: 1200px) {
    padding: 1.5rem 3rem;
    gap: 1rem;
  }
  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Character = ({ character }) => {
  const { birth_year, gender, height, mass, name, url } = character;

  return (
    <CharacterCard to={`/character/${getNumberFromUrl(url)}`}>
      <h2>{name}</h2>
      <div>
        <p>Birth Year: {birth_year}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height} cm</p>
        <p>Mass: {mass} kg</p>
      </div>
    </CharacterCard>
  );
};

export default Character;

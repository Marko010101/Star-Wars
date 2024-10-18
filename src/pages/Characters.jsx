import { useEffect, useState } from "react";

import { fetchCharacters } from "../service/apiCharacters.js";
import Loader from "../components/ui/Loader.jsx";
import styled from "styled-components";
import Character from "../components/Character.jsx";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(characters);

  useEffect(() => {
    setIsLoading(true);
    const loadCharacters = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadCharacters();
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <StyledCharactersList>
      {characters?.results?.map((character) => (
        <Character key={character.url} character={character} />
      ))}
    </StyledCharactersList>
  );
};

export default Characters;

const StyledCharactersList = styled.div`
  margin: 5rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

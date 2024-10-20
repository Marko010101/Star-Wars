import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { fetchCharactersDetails } from "../service/apiCharacters.js";
import { fetchPlanet } from "../service/apiPlanets.js";
import { getNumberFromUrl } from "../utils/getNumberFromUrl.js";
import Button from "../components/ui/Button.jsx";
import DisplayFilms from "../components/DisplayFilms.jsx";
import DisplaySpecies from "../components/DisplaySpecies.jsx";
import DisplayStarships from "../components/DisplayStarships.jsx";
import DisplayVehicles from "../components/DisplayVehicles.jsx";
import LoaderMini from "../components/ui/LoaderMini.jsx";

const CharacterDetails = () => {
  let { characterId } = useParams();
  const [character, setCharacter] = useState({});
  const [homeworld, setHomeworld] = useState({});
  const [openDetail, setOpenDetail] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoadingHiddenData, setIsLoadingHiddenData] = useState(false);

  useEffect(() => {
    setisLoading(true);
    const loadCharacter = async (characterId) => {
      try {
        const data = await fetchCharactersDetails(characterId);
        const homeworldId = getNumberFromUrl(data.homeworld);
        const planetData = await fetchPlanet(homeworldId);

        setCharacter(data);
        setHomeworld(planetData);
        setisLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setisLoading(false);
      }
    };
    loadCharacter(characterId);
  }, [characterId]);

  if (isLoading) return <ReStyledLoaderMini size="medium" />;
  if (error) return <p>{error}</p>;

  const {
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    name,
    skin_color,

    films = [],
    species = [],
    starships = [],
    vehicles = [],
  } = character;

  const { name: homeworldName, terrain } = homeworld;

  const handleChangeDisplay = (name) => {
    setOpenDetail((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <CharacterDetailsWrapper>
        <StyledDetails>
          <h2>{name}</h2>
          <div>
            <p>
              <span>Birth Year:</span> {birth_year}
            </p>
            <p>
              <span>Gender:</span> {gender}
            </p>
            <p>
              <span>Height:</span> {height} cm
            </p>
            <p>
              <span>Mass:</span> {mass} kg
            </p>
            <p>
              <span>Hair Color:</span> {hair_color}
            </p>
            <p>
              <span>Eye Color:</span> {eye_color}
            </p>
            <p>
              <span>Skin Color:</span> {skin_color}
            </p>
            <p>
              <span>Homeworld:</span> {homeworldName || "Unknown"}
            </p>
            <p>
              <span>Terrain:</span> {terrain || "Not specified"}
            </p>
          </div>
        </StyledDetails>
      </CharacterDetailsWrapper>
      <StyledHiddenDetails>
        <div>
          <Button
            isClickable={films.length > 0}
            action={() => handleChangeDisplay("films")}
            isActive={openDetail === "films"}
          >
            {isLoadingHiddenData && openDetail === "films" ? (
              <LoaderMini />
            ) : (
              ` Films: ${films.length}`
            )}
          </Button>
          <Button
            isClickable={species.length > 0}
            action={() => handleChangeDisplay("species")}
            isActive={openDetail === "species"}
          >
            {isLoadingHiddenData && openDetail === "species" ? (
              <LoaderMini />
            ) : (
              ` Species: ${species.length}`
            )}
          </Button>
          <Button
            isClickable={starships.length > 0}
            action={() => handleChangeDisplay("starships")}
            isActive={openDetail === "starships"}
          >
            {isLoadingHiddenData && openDetail === "starships" ? (
              <LoaderMini />
            ) : (
              ` Straships: ${starships.length}`
            )}
          </Button>
          <Button
            isClickable={vehicles.length > 0}
            action={() => handleChangeDisplay("vehicles")}
            isActive={openDetail === "vehicles"}
          >
            {isLoadingHiddenData && openDetail === "vehicles" ? (
              <LoaderMini />
            ) : (
              ` Vehicles: ${vehicles.length}`
            )}
          </Button>
        </div>

        {openDetail === "films" && (
          <DisplayFilms
            films={films}
            setIsLoadingHiddenData={setIsLoadingHiddenData}
          />
        )}
        {openDetail === "species" && (
          <DisplaySpecies
            species={species}
            setIsLoadingHiddenData={setIsLoadingHiddenData}
          />
        )}
        {openDetail === "starships" && (
          <DisplayStarships
            starships={starships}
            setIsLoadingHiddenData={setIsLoadingHiddenData}
          />
        )}
        {openDetail === "vehicles" && (
          <DisplayVehicles
            vehicles={vehicles}
            setIsLoadingHiddenData={setIsLoadingHiddenData}
          />
        )}
      </StyledHiddenDetails>
    </>
  );
};

export default CharacterDetails;

const CharacterDetailsWrapper = styled.div`
  border: 0.1rem solid var(--color-secondary-background);
  margin-top: 5rem;
  padding: 2rem 2rem 3rem 2rem;
  border-radius: 0.8rem;

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;
const StyledDetails = styled.div`
  h2 {
    font-size: var(--font-size-extra-huge);
    font-weight: var(--font-weight-semi-bold);
    text-align: center;
  }

  div {
    margin-top: 3rem;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, max-content);
    column-gap: 8rem;
    row-gap: 2.5rem;

    & > p {
      justify-self: start;
      font-weight: var(--font-weight-semi-bold);

      & > span {
        margin-right: 0.3rem;
        font-weight: var(--font-weight-regular);
      }
    }

    @media screen and (max-width: 992px) {
      column-gap: 2.5rem;
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const StyledHiddenDetails = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: var(--color-secondary-background);

  & > div {
    grid-column: 1/-1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rem;
    gap: 0.5rem;
    @media screen and (max-width: 768px) {
      padding: 0 6rem;
    }
    @media screen and (max-width: 576px) {
      padding: 0 1rem;
    }
  }

  & > button {
    align-self: center;
    justify-self: center;
  }
`;

const ReStyledLoaderMini = styled(LoaderMini)`
  margin: 15rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

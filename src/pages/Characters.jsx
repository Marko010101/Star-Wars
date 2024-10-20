import { useEffect, useState } from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";

import {
  fetchCharacters,
  fetchSearchedCharacter,
} from "../service/apiCharacters.js";
import Character from "../components/Character.jsx";
import { StyledInput } from "../components/ui/StyledInput.jsx";
import LoaderMini from "../components/ui/LoaderMini.jsx";
import Pagination from "../components/Pagination.jsx";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [searchedResult, setSearchedResult] = useState([]);
  const [isLoadingSearchedData, setIsLoadingSearchData] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [searchPage, setSearchPage] = useState(1);

  const fetchData = async (fetchFunction, setData, setLoadingState, page) => {
    try {
      setLoadingState(true);
      const data = await fetchFunction(page);
      setTotalPage(Math.ceil(data.count / 10));
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingState(false);
    }
  };

  useEffect(() => {
    fetchData(fetchCharacters, setCharacters, setIsLoading, currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (query.trim().length < 1) {
      setSearchedResult([]);
      setTotalPage(Math.ceil(characters.count / 10));
      return;
    }

    setIsLoadingSearchData(true);
    const delayDebounce = setTimeout(() => {
      fetchData(
        () => fetchSearchedCharacter(query, searchPage),
        setSearchedResult,
        setIsLoadingSearchData
      );
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [query, searchPage]);

  useEffect(() => {
    if (query.trim().length > 0) {
      setSearchPage(1);
    }
  }, [query]);

  function handleClearQuery() {
    setQuery("");
    setSearchPage(1);
  }
  if (error) return <p>{error}</p>;
  return (
    <>
      <StyledInputWrapper>
        <StyledInput
          type="text"
          placeholder="Search Character"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query.length >= 1 ? (
          <span onClick={handleClearQuery}>
            <TiDelete size={24} />
          </span>
        ) : (
          <span>
            <CiSearch size={24} />
          </span>
        )}
      </StyledInputWrapper>
      <StyledCharactersList>
        {isLoading ? (
          <ReStyledLoaderMini size="medium" />
        ) : (
          <div>
            {query.length >= 1 ? (
              isLoadingSearchedData ? (
                <ReStyledLoaderMini size="medium" />
              ) : searchedResult?.results?.length > 0 ? (
                searchedResult.results.map((character) => (
                  <Character key={character.url} character={character} />
                ))
              ) : (
                <p>There is no searched character</p>
              )
            ) : (
              characters?.results?.map((character) => (
                <Character key={character.url} character={character} />
              ))
            )}
          </div>
        )}
      </StyledCharactersList>

      {totalPage > 1 && query.length >= 1 && (
        <Pagination
          currentPage={searchPage}
          setCurrentPage={setSearchPage}
          totalPage={totalPage}
          setTotalPage={setTotalPage}
          isLoading={isLoadingSearchedData || isLoading}
        />
      )}

      {totalPage > 1 && query.length < 1 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
          setTotalPage={setTotalPage}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default Characters;

const StyledCharactersList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    @media screen and (max-width: 1200px) {
      grid-gap: 1rem;
    }
    @media screen and (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
    }

    & > p {
      grid-column: 1/-1;
    }
  }
`;

const StyledInputWrapper = styled.div`
  display: grid;
  width: 40rem;
  margin: 5rem auto;
  position: relative;

  & input {
    padding-right: 4rem;
  }

  & span {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    & > svg {
      fill: var(--color-secondary-primary);
    }
  }

  @media screen and (max-width: 576px) {
    width: 34rem;
  }
`;

const ReStyledLoaderMini = styled(LoaderMini)`
  grid-column: 1/-1;
  margin-top: 5rem;
`;

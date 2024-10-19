import { useEffect, useState } from "react";

import { fetchDataByUrl } from "../service/apiByFetchUrl.js";
import FilmDetails from "./ui/FilmDetails.jsx";
import { StyledDisplayItem } from "./ui/StyledDisplayItem.jsx";

const DisplayFilms = ({ films, setIsLoadingHiddenData }) => {
  const [filmsArr, setFilmsArr] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoadingHiddenData(true);
      try {
        const filmsData = await Promise.all(
          films.map((url) => fetchDataByUrl(url))
        );
        setFilmsArr(filmsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoadingHiddenData(false);
      }
    }

    fetchData();
  }, [films, setIsLoadingHiddenData]);

  if (error) return <p>{error}</p>;

  return (
    <StyledDisplayItem>
      <h3>Films</h3>
      <div>
        {filmsArr?.map((film) => (
          <FilmDetails film={film} key={film.url} />
        ))}
      </div>
    </StyledDisplayItem>
  );
};

export default DisplayFilms;

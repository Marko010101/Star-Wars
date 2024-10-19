import { useEffect, useState } from "react";
import { StyledDisplayItem } from "./ui/StyledDisplayItem.jsx";
import { fetchDataByUrl } from "../service/apiByFetchUrl.js";
import StarshipDetails from "./ui/StarshipDetails.jsx";

const DisplayStarships = ({ starships, setIsLoadingHiddenData }) => {
  const [starshipsArr, setStarshipsArr] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoadingHiddenData(true);
      try {
        const starshipsData = await Promise.all(
          starships.map((url) => fetchDataByUrl(url))
        );
        setStarshipsArr(starshipsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoadingHiddenData(false);
      }
    }

    fetchData();
  }, [starships, setIsLoadingHiddenData]);

  if (error) return <p>{error}</p>;

  return (
    <StyledDisplayItem>
      <h3>Starship</h3>
      <div>
        {starshipsArr?.map((starship) => (
          <StarshipDetails starship={starship} key={starship.url} />
        ))}
      </div>
    </StyledDisplayItem>
  );
};

export default DisplayStarships;

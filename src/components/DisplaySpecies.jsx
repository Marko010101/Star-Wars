import { useEffect, useState } from "react";
import { StyledDisplayItem } from "./ui/StyledDisplayItem.jsx";
import { fetchDataByUrl } from "../service/apiByFetchUrl.js";
import SpeciesDetails from "./ui/SpeciesDetails.jsx";

const DisplaySpecies = ({ species, setIsLoadingHiddenData }) => {
  const [speciesArr, setSpeciesArr] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoadingHiddenData(true);
      try {
        const speciesData = await Promise.all(
          species.map((url) => fetchDataByUrl(url))
        );
        setSpeciesArr(speciesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoadingHiddenData(false);
      }
    }

    fetchData();
  }, [species, setIsLoadingHiddenData]);

  if (error) return <p>{error}</p>;

  return (
    <StyledDisplayItem>
      <h3>Species</h3>
      <div>
        {speciesArr?.map((specie) => (
          <SpeciesDetails specie={specie} key={specie.url} />
        ))}
      </div>
    </StyledDisplayItem>
  );
};

export default DisplaySpecies;

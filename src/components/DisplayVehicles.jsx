import { useEffect, useState } from "react";

import { fetchDataByUrl } from "../service/apiByFetchUrl.js";
import { StyledDisplayItem } from "./ui/StyledDisplayItem.jsx";
import VehicleDetails from "./ui/VehicleDetails.jsx";

const DisplayVehicles = ({ vehicles, setIsLoadingHiddenData }) => {
  const [vehiclesArr, setVehiclesArr] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoadingHiddenData(true);
      try {
        const vehiclesData = await Promise.all(
          vehicles.map((url) => fetchDataByUrl(url))
        );
        setVehiclesArr(vehiclesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoadingHiddenData(false);
      }
    }

    fetchData();
  }, [vehicles, setIsLoadingHiddenData]);

  if (error) return <p>{error}</p>;

  return (
    <StyledDisplayItem>
      <h3>Vehicles</h3>
      <div>
        {vehiclesArr?.map((vehicle) => (
          <VehicleDetails vehicle={vehicle} key={vehicle.url} />
        ))}
      </div>
    </StyledDisplayItem>
  );
};

export default DisplayVehicles;

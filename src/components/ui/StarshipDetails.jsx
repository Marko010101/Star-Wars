import { StyledHiddenDetails } from "./StyledHiddenDetails.jsx";

const StarshipDetails = ({ starship }) => {
  const {
    name,
    MGLT,
    cargo_capacity,
    hyperdrive_rating,
    manufacturer,
    starship_class,
    crew,
    passengers,
  } = starship;
  
  return (
    <StyledHiddenDetails>
      <h3>{name}</h3>
      <p>
        <span>Starship Class:</span> {starship_class}
      </p>
      <p>
        <span>Manufacturer:</span> {manufacturer}
      </p>
      <p>
        <span>Hyperdrive Rating:</span> {hyperdrive_rating}
      </p>
      <p>
        <span>Crew:</span> {crew}
      </p>
      <p>
        <span>Passengers:</span> {passengers}
      </p>
      <p>
        <span>Cargo Capacity:</span> {cargo_capacity} tons
      </p>
      <p>
        <span>MGLT (Max Speed in Megalights):</span> {MGLT}
      </p>
    </StyledHiddenDetails>
  );
};

export default StarshipDetails;

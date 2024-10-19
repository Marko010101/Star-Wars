import { StyledHiddenDetails } from "./StyledHiddenDetails.jsx";

const VehicleDetails = ({ vehicle }) => {
  const {
    name,
    vehicle_class,
    manufacturer,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
  } = vehicle;

  return (
    <StyledHiddenDetails>
      <h3>{name}</h3>
      <p>
        <span>Vehicle Class:</span> {vehicle_class}
      </p>
      <p>
        <span>Manufacturer:</span> {manufacturer}
      </p>
      <p>
        <span>Length:</span> {length} meters
      </p>
      <p>
        <span>Max Speed:</span> {max_atmosphering_speed} km/h
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
    </StyledHiddenDetails>
  );
};

export default VehicleDetails;

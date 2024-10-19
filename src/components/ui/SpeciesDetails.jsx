import { StyledHiddenDetails } from "./StyledHiddenDetails.jsx";

const SpeciesDetails = ({ specie }) => {
  const {
    average_height,
    average_lifespan,
    classification,
    designation,
    eye_colors,
    hair_colors,
    language,
    name,
    skin_colors,
  } = specie;

  return (
    <StyledHiddenDetails>
      <h3>{name}</h3>
      <p>
        <span>Classification:</span> {classification}
      </p>
      <p>
        <span>Designation:</span> {designation}
      </p>
      <p>
        <span>Average Height:</span> {average_height} cm
      </p>
      <p>
        <span>Average Lifespan:</span>{" "}
        {average_lifespan === "unknown"
          ? average_lifespan
          : average_lifespan + " years"}
      </p>
      <p>
        <span>Eye Colors:</span> {eye_colors}
      </p>
      <p>
        <span>Hair Colors:</span> {hair_colors}
      </p>
      <p>
        <span>Skin Colors:</span> {skin_colors}
      </p>
      <p>
        <span>Language:</span> {language}
      </p>
    </StyledHiddenDetails>
  );
};

export default SpeciesDetails;

import { StyledHiddenDetails } from "./StyledHiddenDetails.jsx";

const FilmDetails = ({ film }) => {
  const { director, episode_id, opening_crawl, producer, release_date, title } =
    film;

  return (
    <StyledHiddenDetails>
      <h3>
        {title} (Episode {episode_id})
      </h3>
      <p>
        <span>Director:</span> {director}
      </p>
      <p>
        <span>Producer(s):</span> {producer}
      </p>
      <p>
        <span>Release Date:</span> {new Date(release_date).toLocaleDateString()}
      </p>
      <p>
        <span>Opening Crawl:</span> {opening_crawl}
      </p>
    </StyledHiddenDetails>
  );
};

export default FilmDetails;

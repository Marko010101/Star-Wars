import styled from "styled-components";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
const Pagination = ({ currentPage, setCurrentPage, totalPage, isLoading }) => {
  if (isLoading) return null;

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPage) return;
    setCurrentPage(page);
  };

  return (
    <StyledPagination>
      <div>
        <StyledDirectionButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <GrLinkPrevious /> Previous
        </StyledDirectionButton>
        {Array.from({ length: totalPage }, (_, index) => (
          <StyledPageButtons
            $isCurrentPage={index + 1 === currentPage}
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </StyledPageButtons>
        ))}
        <StyledDirectionButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          Next <GrLinkNext />
        </StyledDirectionButton>
      </div>
    </StyledPagination>
  );
};

export default Pagination;

const StyledPagination = styled.div`
  margin: 0 auto;
  justify-items: center;
  padding: 5rem 0 10rem 0;

  & > div {
    display: flex;
    gap: 1.5rem;
    
    @media screen and (max-width: 768px) {
      gap: 1rem;
    }
    @media screen and (max-width: 576px) {
      gap: 0.5rem;
    }
  }
`;

const StyledDirectionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-width: 10rem;
  padding: 0.5rem 1.5rem;
  border-radius: 3rem;
  background-color: transparent;

  @media screen and (max-width: 576px) {
    display: none;
  }

  &:hover {
    background-color: var(--color-jedi-blue-darker);
  }
`;

const StyledPageButtons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 1rem;
  min-width: 3.5rem;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  background-color: transparent;

  background-color: ${({ $isCurrentPage }) =>
    $isCurrentPage ? "var(--color-jedi-blue-darker)" : "transparent"};
  &:hover {
    background-color: var(--color-jedi-blue-darker);
  }
`;

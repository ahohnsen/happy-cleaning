import styled from 'styled-components';

export default function Navigation({ currentPage, setCurrentPage }) {
  return (
    <NavigationContainer>
      <NavigationButton
        onClick={() => setCurrentPage('Rooms')}
        currentPage={currentPage}
      >
        Rooms
      </NavigationButton>
      <NavigationButton
        onClick={() => setCurrentPage('Flatmates')}
        currentPage={currentPage}
      >
        Flatmates
      </NavigationButton>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const NavigationButton = styled.button`
  padding: 15px;
  border: none;
  font-weight: 600;
  background-color: ${({ children, currentPage }) =>
    children === currentPage ? 'cornflowerblue' : 'steelblue'};
`;

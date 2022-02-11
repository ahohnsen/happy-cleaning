import { useState } from 'react';
import styled from 'styled-components';
import Header from './Header.js';
import PageFlatmates from './PageFlatmates.js';
import PageRooms from './PageRooms.js';
import Navigation from './Navigation.js';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Rooms');

  return (
    <AppGrid>
      <Header currentPage={currentPage} />
      <PageContainer>
        {currentPage === 'Rooms' && <PageRooms />}
        {currentPage === 'Flatmates' && <PageFlatmates />}
      </PageContainer>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </AppGrid>
  );
}

const PageContainer = styled.main`
  padding: 0 20px;
`;

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 48px;
  height: 100vh;
`;

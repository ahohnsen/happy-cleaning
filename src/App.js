import { useImmer } from 'use-immer';
import { useState } from 'react';
import './App.css';
import Room from './Room.js';
import Header from './Header.js';
import Flatmates from './Flatmates.js';
import Navigation from './Navigation.js';

export default function App() {
  const [rooms, updateRooms] = useImmer([
    {
      text: 'Küche',
      description: 'Kühlschrank auswischen',
      isClean: false,
    },
    {
      text: 'Wohnzimmer',
      description: 'Hinter dem Sofa staubsaugen',
      isClean: true,
    },
    {
      text: 'Bad',
      description: 'Eigener Lappen für das Klo',
      isClean: false,
    },
  ]);

  const [currentPage, setCurrentPage] = useState('Rooms');

  return (
    <div className="App">
      {' '}
      <Header>{currentPage}</Header>
      <main>
        {currentPage === 'Rooms' &&
          rooms.map(({ text, description, isClean }, index) => (
            <Room
              key={text}
              text={text}
              description={description}
              isClean={isClean}
              toggleStatus={event => {
                event.stopPropagation();
                updateRooms(draft => {
                  draft[index].isClean = !isClean;
                });
              }}
            />
          ))}
        {currentPage === 'Flatmates' && <Flatmates />}
      </main>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

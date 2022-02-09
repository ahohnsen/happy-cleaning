import { useImmer } from 'use-immer';
import './App.css';
import Room from './Room.js';
import Header from './Header.js';

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

  return (
    <main className="App">
      <Header>🧼 Happy Cleaning! </Header>
      {rooms.map(
        ({ text, description, isDescriptionVisible, isClean }, index) => (
          <Room
            key={text}
            text={text}
            description={description}
            isDescriptionVisible={isDescriptionVisible}
            isClean={isClean}
            toggleStatus={event => {
              event.stopPropagation();
              updateRooms(draft => {
                draft[index].isClean = !isClean;
              });
            }}
          />
        )
      )}
    </main>
  );
}

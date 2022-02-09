import './App.css';
import Room from './Room.js';
import Header from './Header.js';

export default function App() {
  const rooms = [
    {
      text: 'Küche',
      description: 'Kühlschrank auswischen',
      isDescriptionVisible: true,
      isClean: false,
    },
    {
      text: 'Wohnzimmer',
      description: 'Hinter dem Sofa staubsaugen',
      isDescriptionVisible: false,
      isClean: true,
    },
    {
      text: 'Bad',
      description: 'Eigener Lappen für das Klo',
      isDescriptionVisible: true,
      isClean: false,
    },
  ];

  return (
    <main className="App">
      <Header>🧼 Happy Cleaning!</Header>
      {rooms.map(({ text, description, isDescriptionVisible, isClean }) => (
        <Room
          key={text}
          text={text}
          description={description}
          isDescriptionVisible={isDescriptionVisible}
          isClean={isClean}
        />
      ))}
    </main>
  );
}

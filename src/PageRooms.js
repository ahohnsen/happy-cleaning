import { useImmer } from 'use-immer';
import Room from './Room.js';

export default function PageRoom() {
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

  return rooms.map(({ text, description, isClean }, index) => (
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
  ));
}

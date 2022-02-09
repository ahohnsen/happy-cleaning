import { useState } from 'react';
import './Room.css';

export default function Room({ text, description, isClean, toggleStatus }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const statusClassName = `Room__status Room__status--${
    isClean ? 'clean' : 'dirty'
  }`;
  return (
    <section onClick={toggleDescription} className="Room">
      <header className="Room__header">
        {text}
        <button onClick={toggleStatus} className={statusClassName}></button>
      </header>
      <p hidden={!isDescriptionVisible}>{description}</p>
    </section>
  );

  function toggleDescription() {
    setIsDescriptionVisible(!isDescriptionVisible);
  }
}

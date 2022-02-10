import { useState, useEffect } from 'react';
import './Flatmates.css';

export default function Flatmates() {
  const [flatmates, setFlatmates] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    loadFlatmates();
  }, []);

  async function loadFlatmates() {
    try {
      const response = await fetch(
        'https://rickandmortyapi.com/api/character/1,2,3'
      );

      if (response.ok) {
        const data = await response.json();
        setFlatmates(data);
      } else {
        throw new Error('404 - not found');
      }
    } catch (error) {
      console.log(error.message);
      setHasError(true);
    }
  }

  return (
    <section>
      {hasError && <p>Error: could not load characters.</p>}
      <ul>
        {flatmates.map(({ name, status, id }) => (
          <li key={id} name={name} status={status}>
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}

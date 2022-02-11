import { useState, useEffect } from 'react';
import styled from 'styled-components';

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
      <FlatmateList>
        {flatmates.map(({ name, status, id }) => (
          <FlatmateListItem key={id} name={name} status={status}>
            {name}
          </FlatmateListItem>
        ))}
      </FlatmateList>
    </section>
  );
}

const FlatmateList = styled.ul`
  display: grid;
  gap: 15px;
`;

const FlatmateListItem = styled.li`
  padding: 13px 12px;
  border: 1px solid #ddd;
  list-style: none;
  font-weight: 600;
`;

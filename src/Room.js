import { useState } from 'react';
import styled from 'styled-components';

export default function Room({ text, description, isClean, toggleStatus }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <RoomContainer onClick={toggleDescription}>
      <RoomHeader>
        {text}
        <RoomStatus onClick={toggleStatus} isClean={isClean}></RoomStatus>
      </RoomHeader>
      <RoomDescription hidden={!isDescriptionVisible}>
        {description}
      </RoomDescription>
    </RoomContainer>
  );

  function toggleDescription() {
    setIsDescriptionVisible(!isDescriptionVisible);
  }
}

const RoomContainer = styled.section`
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
`;

const RoomHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
`;

const RoomDescription = styled.p`
  padding-top: 15px;
`;

const RoomStatus = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 1px 1px 2px grey;
  border: black;
  background-color: ${props => (props.isClean ? 'green' : 'red')};
`;

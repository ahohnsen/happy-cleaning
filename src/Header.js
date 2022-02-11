import styled from 'styled-components';

export default function Header({ currentPage }) {
  return <Heading>{currentPage}</Heading>;
}

const Heading = styled.h1`
  padding: 20px;
  text-align: center;
`;

import styled from 'styled-components';

export default function Header({ children }) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.h1`
  padding: 20px;
  text-align: center;
`;

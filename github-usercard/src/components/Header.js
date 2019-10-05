import React from 'react';
import styled from 'styled-components';

class GitHeader extends React.Component {
  render() {
    return (
      <>
        <HeaderStyle>GitHub User Card</HeaderStyle>
      </>
    )
  }
}
const HeaderStyle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;

export default GitHeader;

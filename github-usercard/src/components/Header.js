import React from 'react';
import styled from 'styled-components';

class GitHeader extends React.Component {
  constructor() {
    super()
  }

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
  fontsize: 2 rem;
`;

export default GitHeader;

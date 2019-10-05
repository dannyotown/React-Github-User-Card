import React from 'react';
import styled from 'styled-components';

class UserCard extends React.Component {
  render() {
    return (
      <CardBox>
        <H1>{this.props.name}</H1>
        <img src={this.props.image} alt="userimage" />
        <FlexToBottom>
          <P>Location: {this.props.location}</P>
          <P>Repos: {this.props.repos}</P>
        </FlexToBottom>
      </CardBox>
    )
  }
}
const H1 = styled.div`
    background-color: #E3E1E4;
    padding: 5%;
    color: #1A416C;
    font-weight: bold;
    margin-bottom: 3%;
    font-size: 2rem;
`;

const P = styled.div`
  text-align: center;
  font-size: 1.25rem;
  line-height: 40px;
`;

const FlexToBottom = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;
const CardBox = styled.div`
width: 30%;
height: 375px;
border: 2px solid #D3D3D3;
text-align: center;
margin: 1%;
`;

export default UserCard;
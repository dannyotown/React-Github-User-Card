import React from 'react';
import styled from 'styled-components';

class FollowerCard extends React.Component {
    render() {
        return (
            <CardBox>
                <H1>{this.props.login}</H1>
                <FlexToBottom>
                    <Image src={this.props.avatar} alt="userimage" />
                    <AHREF href={this.props.url}>Their Page</AHREF>
                </FlexToBottom>
            </CardBox>
        )
    }
}

const CardBox = styled.div`
width: 30%;
height: 350px;
border: 2px solid #D3D3D3;
text-align: center;
margin: 1%;
`;

const H1 = styled.div`
    background-color: #E3E1E4;
    padding: 5%;
    color: #1A416C;
    font-weight: bold;
    margin-bottom: 3%;
    font-size: 2rem;
`;
const FlexToBottom = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;
const Image = styled.img`
    width: 50%;
    height: auto;
    margin: 0 auto;
`;
const AHREF = styled.a`
    text-decoration: none;
    color: #3D5C79;
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 3%;
`;
export default FollowerCard;
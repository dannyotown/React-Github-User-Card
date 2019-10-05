import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';
import axios from 'axios';
import FollowerCard from './FollowCard';

class Body extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            image: '',
            location: '',
            repos: ''
        }
        this.state = {
            followers:[]
        }
    }
    componentDidMount() {
        this.fetchGitUser()
        this.fetchGitFollowers()
    }
    fetchGitUser = () => {
        axios.get(`https://api.github.com/users/dannyotown`)
            .then(result => this.setState({
                name: result.data.name,
                image: result.data.avatar_url,
                location: result.data.location,
                repos: result.data.public_repos

            }))
            .catch(error => console.log(error))
    }

    fetchGitFollowers = () => {
        axios.get(`https://api.github.com/users/dannyotown/followers`)
            .then(result => this.setState({
                followers: result.data
            }))
            .catch(error => console.log(error))
    }
    render() {
        return (
            <>
                <MiddleBox>
                    <FlexBoxStyle>
                        <UserCard repos={this.state.repos} location={this.state.location} name={this.state.name} image={this.state.image} />
                    </FlexBoxStyle>
                    <FlexBoxStyleForUsers>
                    {this.state.followers.map((x, index)=>{return <FollowerCard key={index} url={x.html_url} login={x.login} avatar={x.avatar_url}  /> })}
                    </FlexBoxStyleForUsers>
                </MiddleBox>
            </>
        )
    }
}

const FlexBoxStyle = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

const FlexBoxStyleForUsers = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

const MiddleBox = styled.div`
    margin: 0 auto;
    width: 75%;
    border: solid #d3d3d3 2px;
    box-shadow: 15px 25px #FAFAFA;
`;

export default Body;
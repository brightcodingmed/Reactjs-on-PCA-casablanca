import React, { Component } from 'react'

export class User extends Component {


    state = {
        id: 1,
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
    }

    render() {

        const { login, avatar_url, html_url } = this.props.user;

        return (
            <div>
                <img src={avatar_url} alt={login} />
                <h1>Login</h1>
                <a href={html_url}>{login}</a>
            </div>
        )
    }
}

export default User

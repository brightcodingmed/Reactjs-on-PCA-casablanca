import React, { Component } from 'react'
import User from './User';
import axios from 'axios';

export class Users extends Component {


    state = {
        users: []
    }

    getAllUsers = () => {
        axios.get('https://api.github.com/users')
             .then(response => {
                 this.setState({
                    users: response.data 
                 })
             })
             .catch(error => console.error(error))
    }

    render() {
        return (
            <div>

                <button onClick={this.getAllUsers} className="btn btn-success btn-block my-4">
                   <i className="fa fa-refresh"></i>
                </button>

                { this.state.users.map(user => (
                  <User key={user.id} user={user}/>
                )) }
            </div>
        )
    }
}

export default Users

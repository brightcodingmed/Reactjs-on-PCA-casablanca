import React, { Component } from 'react'
import User from './User';
import axios from 'axios';

export class Users extends Component {


    componentDidMount() {
        this.getAllUsers();
    }

    componentWillMount() {

        setTimeout(() => {
            console.log('je suis au will mount');
        }, 2000);
    }
    

    state = {
        searchInput: '',
        users: []
    }

    getAllUsers = async () => {

        try {
            let users = await axios.get('https://api.github.com/users');
     
            this.setState({
                users: users.data
            });
        } catch (error) {
            console.log('error in your request')
        }

    }

    searchUsers = () => {
        axios.get('https://api.github.com/search/users?q='+this.state.searchInput)
             .then((users) => {
                 this.setState({
                     users: users.data.items
                 })
             })
             .catch((err) => console.log(err))
    }

    assignDataToSearchInput = (e) => {
        this.setState({
            searchInput: e.target.value
        })
    }

    render() {
        console.log('je suis au render');
        return (
            <div>

              <div className="row my-2">
                  <div className="col-12">
                      <input onChange={this.assignDataToSearchInput} value={this.state.searchInput} placeholder="Search a user..." className="form-control" type="text"/>
                      <button onClick={this.searchUsers} className="btn btn-success btn-block">
                          <i className="fa fa-send"></i> Search
                      </button>

                      {this.state.searchInput}
                  </div>
              </div>

              <div className="row">
                  { this.state.users.map(user => (
                    <div key={user.id} className="col-md-4 col-sm-6 col-xs-12">
                        <User  user={user}/>
                    </div>
                    )) }
              </div>
                
            </div>
        )
    }
}

export default Users

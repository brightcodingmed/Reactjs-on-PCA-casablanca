import React, { Component } from 'react'
import axios from 'axios';

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then((posts) => {
                 this.setState({
                     posts: posts.data
                 })

                 console.log(posts);
             })
             .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
               <table class="table table-hover">
                   <thead>
                       <tr>
                           <th>Id</th>
                           <th>Title</th>
                           <th>Body</th>
                           <th></th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.state.posts.map((post) => (
                       <tr>
                           <td scope="row">{post.id}</td>
                           <td> <h3>{post.title}</h3> </td>
                           <td>
                               <em>{post.body}</em> 
                           </td>
                           <td className="text-right" nowrap="true">
                               <button className="btn btn-sm btn-info mr-1"><i className="fa fa-pencil"></i></button>
                               <button className="btn btn-sm btn-warning"><i className="fa fa-times"></i></button>
                           </td>
                       </tr>

                       ))}
                       
                   </tbody>
               </table>
            </div>
        )
    }
}

export default Posts

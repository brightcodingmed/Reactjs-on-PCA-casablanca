import React, { Component } from 'react'

class AddPost extends Component {

    state = {
        title: '',
        body: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addPost = (e) => {
        e.preventDefault();
        this.props.dataFromPostToPosts(this.state)
    }

    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-md-6 my-3 mx-auto">

                        <form onSubmit={this.addPost}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input onChange={this.handleInput} value={this.state.title} id="title" name="title" type="text" className="form-control"/></div>
                            <div className="form-group">
                                <label htmlFor="body">Body</label>
                                <input onChange={this.handleInput} value={this.state.body} id="body" name="body" className="form-control" /></div>

                                <button className="btn btn-info btn-block"><i className="fa fa-plus"></i> Add post</button>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default AddPost

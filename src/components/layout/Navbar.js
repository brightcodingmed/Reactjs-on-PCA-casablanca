import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(props) {
    
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <a className="navbar-brand" href="#"><i className={props.icon}></i> {props.title}</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item" >
                                <Link className="nav-link" to="/posts">Blog <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link" to="/users">Users</Link>
                            </li>
                        </ul>
                      
                    </div>
                </nav>
            </div>
        )

}

export default Navbar

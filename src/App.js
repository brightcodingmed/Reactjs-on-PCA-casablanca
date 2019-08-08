import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>

        <Navbar icon="fa fa-github" title="PCA" />
      
        <div className="container">
          
          <Switch>
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/users" component={Users} />
            <Route default component={Posts} />
          </Switch>
          
        </div>
      </Router>
    </div>
  );
}

export default App;

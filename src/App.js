import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/users/Users';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div>
      <Navbar icon="fa fa-github" title="PCA" />
      <h1>Formation ReactJS</h1>
      <p>Salam PCA </p>
      <hr />
      <Users  />
    </div>
  );
}

export default App;

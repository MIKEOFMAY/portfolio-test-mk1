import logo from './assets/img/logo.svg';
import './App.css';
import React from 'react';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App"> 
      <NavBar></NavBar>
      <Banner></Banner>



    </div>
  );
}

export default App;
  
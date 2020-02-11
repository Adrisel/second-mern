import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation'
import Main from './components/Main'
import Cards from './components/Cards'
import Vote from './components/Vote'
import Results from './components/Results'
function App() {
  return (
    <Router>
      <Navigation/>

      <Route path='/' exact component={Main}/>
      <Route path='/cards' component={Cards}/>
      <Route path='/vote' component={Vote}/>
      <Route path='/results' component={Results}/>
    </Router>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/pages/Home'
import AboutPage from './components/pages/About'
import ContactPage from './components/pages/Contact'
import ProjectPage from './components/pages/Project'
import * as ReactBootStrap from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "Navbar">
      <Navbar/>
      </div>
      <div className = "main_content">
        <div className = "content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/About" exact>
              <AboutPage />
            </Route>
            <Route path="/Contact" exact>
              <ContactPage />
            </Route>
            <Route path="/Project" exact>
              <ProjectPage />
            </Route>
          </Switch>
        </div>
      </div>

    </div>
  );
}

export default App;

import Navbar from './components/navbar/Navbar';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {AccountContext} from './Context.js';

function App() {

  const [publicK, setPublicK] = React.useState("");

  return (

      <Router>
        <AccountContext.Provider value={{publicK, setPublicK}}>
          <div className="App">
            <Navbar />

            <div className="content">
            </div>

          </div>
        </AccountContext.Provider>
      </Router>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Initial from './components/Initial.jsx';
import Technical from './components/Technical.jsx';
import Challenge from './components/Challenge.jsx';
import OnSite from './components/OnSite.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div>
           <h1>taskr</h1>
           
        </div>
        <div className="categories">
          <Initial />
          <Technical />
          <Challenge />
          <OnSite />
        </div>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import GifContainer from './GifContainer';
import Search from './Search'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"><br></br>
        <div className="App-header">
          <img src={'http://24.media.tumblr.com/edf1b7e77e6ebd9cd31b164fd4b04816/tumblr_myn2wnnkow1qg6rkio1_500.gif'} className="App-logo" alt="logo" />
          <br></br><br></br>
        </div>
        <br></br>
        <div className="App-intro">
        </div>
        <GifContainer/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import Timeline from './components/Timeline';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Timeline />
      </div>
    );
  }
}

export default App;

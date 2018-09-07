import React, { Component } from 'react';
import './App.css';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <ThreadDisplay />
    );
  }
}

export default App;

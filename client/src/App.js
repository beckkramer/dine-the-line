import React, { Component } from 'react';


import StationSelection from './scenes/StationSelection/StationSelection'
import Welcome from './scenes/Welcome/Welcome'
class App extends Component {

  state = {
    welcomed: false
  }

  render() {
    return (
      <main className="App">

        <Welcome />
        
        <StationSelection />
        <section>Results!</section>
      </main>
    );
  }
}

export default App;

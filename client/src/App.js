import React, { Component } from 'react';


import StationSelection from './scenes/StationSelection/StationSelection'
import Welcome from './scenes/Welcome/Welcome'
class App extends Component {

  state = {
    station: null,
    welcomed: true,
  }

  welcome = () => {
    this.setState({welcomed: true})
  }

  render() {
    return (
      <main className="App">

        {!this.state.welcomed && (
          <Welcome onWelcome={this.welcome} />
        )}
        <StationSelection />
        <section>Results!</section>
      </main>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Axios from 'axios'

import Results from './scenes/Results'
import StationSelection from './scenes/StationSelection'
import Welcome from './scenes/Welcome/Welcome'
class App extends Component {

  state = {
    stations: null,
    welcomed: true,
  }

  setStations = (stations) => {
    this.setState({stations: stations})
  }

  welcome = () => {
    this.setState({welcomed: true})
  }

  componentDidMount() {
    if (!this.state.stations) {
      Axios.get('/api/stations/all').then(stations => {
        this.setState({
          stations: stations.data,
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }

  render() {
    return (
      <main className="App">

        {!this.state.welcomed ? (<Welcome onWelcome={this.welcome} />) : (
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={() => <StationSelection stations={this.state.stations} />}
          />
          <Route
            exact
            render={
              (routeProps) => {
                const station = this.state.stations && this.state.stations.find((station) => station.stop_id === routeProps.match.params.id )
                if (station) {
                  return (
                    <div>
                      <Results
                        {...routeProps}
                        filters={[]}
                        station={station}
                      />
                    </div>
                  )
                }
              }
            }
            path="/station/:id"
          />
        </BrowserRouter>
        )}
      </main>
    );
  }
}

export default App;

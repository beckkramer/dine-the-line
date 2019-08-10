import React, { Component } from 'react'
import Axios from 'axios'

import StationInfo from '../../components/StationInfo'

import './StationSelection.scss'

export default class StationSelection extends Component {

  state = {
    filteredStations: [],
    stations: [],
  }

  componentDidMount() {
    Axios.get('api/stations/all').then(stations => {
      this.setState({
        filteredStations: stations.data,
        stations: stations.data,
      })
    }).catch(error => {
      console.log(error)
    })
  }
  render() {

    console.log(this.state.stations)
    return (
      <div>

        {this.state.stations.length === 0 && (
          <div>Loading stations...</div>
        )}

          Select a Station:
          <input
            list="stationlist"
          />

        {this.state.stations.length > 0 && (
        <ul>
            {this.state.filteredStations.map((station) => {
              const {
                accessible,
                lines,
                name,
                stop_id,
              } = station

              const displayLines = lines.active.join(' / ')
              const hasTransfers = lines.active.length > 1
              
              return (
                <li>
                  <a
                    key={stop_id}
                    id={stop_id}
                    href={`/station/${stop_id}`}
                  >
                    <StationInfo
                      a11y={accessible}
                      hasTransfers={hasTransfers}
                      key={`${stop_id}-stationlink`}
                      lines={displayLines}
                      name={name}
                    />
                </a>
              </li>
              )
            })}
        </ul>
        )}
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import StationInfo from '../../components/StationInfo'

import './StationSelection.scss'

export default class StationSelection extends Component {

  state = {
    allStations: null,
    filteredStations: null,
  }

  componentDidMount() {
    
    
  }
  
  render() {

    const { stations } = this.props

    return (
      <div>

        {!stations ? (
          <div>Loading stations...</div>
        ) : (
          <>
            Select a Station:
            <input
              list="stationlist"
            />
            
            {stations.length > 0 && (
              <ul className="stationList">
                {stations.map((station) => {
                  const {
                    accessible,
                    lines,
                    name,
                    stop_id,
                  } = station
                  
                  return (
                    <li
                      className="stationList__item"
                      id={stop_id}
                      key={stop_id}
                    >
                      <Link
                        className="stationList__link"
                        to={`/station/${stop_id}`}
                      >
                        <StationInfo
                          a11y={accessible}
                          key={`${stop_id}-stationlink`}
                          level={3}
                          lines={lines}
                          name={name}
                        />
                    </Link>
                  </li>
                  )
                })}
              </ul>
            )}
          </>
        )}
      </div>
    )
  }
}
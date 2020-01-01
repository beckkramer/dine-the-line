import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Axios from 'axios'

import Card from '../../components/Card'
import StationInfo from '../../components/StationInfo'

import './Results.scss'

export default class Results extends Component {

  state = {
    results: null
  }

  componentDidMount() {
    Axios
      .get(`/api/yelp/${this.props.station.location}/filters?${this.props.filters.join(',')}`)
      .then(results => {
        this.setState({
          results: results.data.jsonBody,
        })
      }).catch(error => {
        console.log(error)
      })
  }

  render() {

    const { station } = this.props
    const { results } = this.state

    return (
      <section>
        <header>
          Selected station:
          {station && <StationInfo
            a11y={station.accessible}
            lines={station.lines}
            name={station.name}
            />}
          <Link to="/">Pick a new station</Link>
        </header>
        <h1>Businesses near this station:</h1>

        {results ? (
          <ul className="Results">
            {results.businesses.map((result) => {
            
              const {
                categories,
                id,
                location,
                name,
                price,
                rating,
                review_count,
                transactions,
                url
              } = result
              
              return (
                <li key={id}>
                  <Card
                    categories={categories}
                    location={location}
                    name={name}
                    price={price}
                    rating={rating}
                    review_count={review_count}
                    transactions={transactions}
                    url={url}
                  />
                </li>
              )
          })}
          </ul>
        ) : (
          <div>Loading results...</div>
        )}
      </section>
    )
  }
}
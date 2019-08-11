import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Axios from 'axios'

import StationInfo from '../../components/StationInfo'

export default class Results extends Component {

  state = {
    results: null
  }

  componentDidMount() {
    Axios
      .get(`/api/yelp/${this.props.station.location}`)
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
          <ul>
            {results.businesses.map((result) => {
              
              const categoryLabel = result.categories.map(category => category.title)
              const priceLevel = result.price.length

              let describedPrice = 'average meal, tax and tip is '
              
              switch(priceLevel) {
                case 1:
                  describedPrice += 'under 10'
                  break
                case 2:
                  describedPrice += '11-30'
                  break
                case 3:
                  describedPrice += '31-60'
                  break
                case 4:
                  describedPrice += 'above 61'
                  break
                default:
              }

              describedPrice += ' dollars'

              return (
                <li key={result.id}>
                  <p>{categoryLabel.join(', ')}</p>
                  <h3>{result.name}</h3>
                  <p>Price: <span className="visually-hidden">{describedPrice}</span> <span aria-hidden="true">{result.price}</span>  &bull; Distance from Station: {result.distance}</p>
                  <p>Rating: <img src="" alt={`${result.rating} out of 5 stars`} /> ({result.review_count} reviews)</p>
                  {result.transactions.length > 0 && <p>
                    Offers {result.transactions.join(', ')}
                  </p>}
                  <a href={result.url}>View on Yelp</a>
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
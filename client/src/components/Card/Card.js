import React, { Component } from 'react'

import './Card.scss'

export default class Card extends Component {

  getPriceDescription = (price) => {
    const priceLevel = this.props.price.length

    let describedPrice
    
    if (priceLevel > 0) {
      describedPrice = 'average meal, tax and tip is '

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
          break
      }
  
      describedPrice += ' dollars'
    } else {
      describedPrice = 'price unavailable'
    }

    return describedPrice
  }

  render(){
    const categoryLabel = this.props.categories.map(category => category.title)
    const describedPrice = this.getPriceDescription(this.props.price)

    return (
      <li
        className="Card"
        key={this.props.id}
      >
        <p className="categories">{categoryLabel.join(', ')}</p>
        <div className="content">
          <h3>{this.props.name}</h3>
          <p>Price: <span className="visually-hidden">{describedPrice}</span> <span aria-hidden="true">{this.props.price}</span>  &bull; Distance from Station: {this.props.distance}</p>
          <p>Rating: <img src="" alt={`${this.props.rating} out of 5 stars`} /> ({this.props.review_count} reviews)</p>
          {this.props.transactions.length > 0 && <p>
            Offers {this.props.transactions.join(', ')}
          </p>}
          <a href={this.props.url}>View on Yelp</a>
        </div>
        <div className="footer"></div>
      </li>
    )
  }
}
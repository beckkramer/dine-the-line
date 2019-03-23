import React, { Component } from 'react'

export default class Welcome extends Component {

  render() {
    return (
      <div class="blurb">
        <h2>Dine the Line helps you find places to eat near Chicago's L stations.</h2>
        <p>Just pick a station, and you'll get a list of businesses nearby!</p>
        <button>Load stations!</button>
      </div>
    )
  }
}
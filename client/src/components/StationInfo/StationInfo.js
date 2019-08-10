import React from 'react'

const StationInfo = (props) => {

  let details = []

  if (props.a11y) {
    details.push('Accessible')
  }

  if (props.hasTransfers) {
    details.push('Can Transfer')
  }

  return(
    <div>
      {props.name} <br />
      Lines: {props.lines}<br />
      Details: {details.length ? details.join(' / ') : 'N/A'}
    </div>
  )
}

export default StationInfo
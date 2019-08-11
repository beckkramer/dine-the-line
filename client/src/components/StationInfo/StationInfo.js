import React from 'react'

const StationInfo = (props) => {

  const displayLines = props.lines.active.join(' / ')
  const hasTransfers = props.lines.active.length > 1

  let details = []

  if (props.a11y) {
    details.push('Accessible')
  }

  if (hasTransfers) {
    details.push('Can Transfer')
  }

  return(
    <div>
      <h3>{props.name}</h3>
      Lines: {displayLines}<br />
      Details: {details.length ? details.join(' / ') : 'N/A'}
    </div>
  )
}

export default StationInfo
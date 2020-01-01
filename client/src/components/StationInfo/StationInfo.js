import React from 'react'

import './StationInfo.scss'
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
    <div className="StationInfo">
      <h3 className="StationInfo__title">{props.name}</h3>
      <dl className="StationInfo__details">
        <dt>Lines:</dt><dd>{displayLines}</dd>
        <dt>Details:</dt><dd>{details.length ? details.join(' / ') : 'N/A'}</dd>
      </dl>
    </div>
  )
}

export default StationInfo
import React from 'react'

const InsetShadow = ({ chartId, stdDeviation, floodColor, floodOpacity }) => {
  return (
    <defs>
      <filter id={chartId}>
        <feOffset dx="0" dy="0"/>
        <feGaussianBlur is stdDeviation={stdDeviation} result="offset-blur"/>
        <feComposite is operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
        <feFlood is flood-color={floodColor} flood-opacity={floodOpacity} result="color"/>
        <feComposite is operator="in" in="color" in2="inverse" result="shadow"/>
        <feComposite is operator="over" in="shadow" in2="SourceGraphic"/>
      </filter>
    </defs>
  )
}

InsetShadow.propTypes = {
  chartId: React.PropTypes.string.isRequired,
  stdDeviation: React.PropTypes.string.isRequired,
  floodColor: React.PropTypes.string.isRequired,
  floodOpacity: React.PropTypes.string.isRequired,
}

export default InsetShadow
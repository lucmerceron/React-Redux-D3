import React from 'react'

const DonutChartLegend = ({ width, height, pie, data }) => {
  // Responsive: don't show legend if too small
  if (width <= (height + 180)) return null

  const transform = 'translate(' + (width / 1.25) + ', 55)'

  const legend = pie(data)
    .map((d, i) => {
      const trsf = 'translate(10,' + (i * 30) + ')'
      const rectStyle = { fill: d.data.color, stroke: d.data.color }
      const textStyle = { fill: d.data.color }

      return (
        <g transform={trsf} key={i}>
          <rect width="20" height="20" style={rectStyle} rx="2" ry="2"/>
          <text x="30" y="15" className="browser-legend" style={textStyle}>{d.data.name}</text>
        </g>
      )
    })

  return (
    <g is transform={transform}>
      {legend}
    </g>
  )
}

DonutChartLegend.propTypes = {
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
  data: React.PropTypes.array.isRequired,
  pie: React.PropTypes.func.isRequired
}

export default DonutChartLegend

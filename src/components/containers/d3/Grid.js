import React from 'react'
import * as d3 from 'd3'

class Grid extends React.Component {
  constructor() {
    super()

    this.renderGrid = this.renderGrid.bind(this)
  }
  componentDidMount() {
    this.renderGrid()
  }
  componentDidUpdate() {
    this.renderGrid()
  }

  renderGrid() {
    const { grid } = this.props

    let node = this.refs.grid
    d3.select(node).call(grid)
  }

  render() {
    return (
      <g ref="grid" className="y-grid"/>
    )
  }
}

Grid.propTypes = {
  grid: React.PropTypes.func.isRequired
}

export default Grid

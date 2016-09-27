import React from 'react'
import { connect } from 'react-redux'

import { generateRandomData } from '../../actionCreators/data'

import LeftBar from '../presentationals/LeftBar'
import TopBar from '../presentationals/TopBar'

class Home extends React.Component {
  render() {
    const { dispatch, children, routing } = this.props

    return (
      <div>
        <div className="top-bar">
          <TopBar handleRefresh={() => dispatch(generateRandomData())}/>
        </div>
        <div className="left-bar">
          <div className="fixed-left-bar">
            <LeftBar pathname={routing.locationBeforeTransitions.pathname}/>
          </div>
        </div>
        <div className="right-content">
          {children}
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired,
  routing: React.PropTypes.object.isRequired,
  children: React.PropTypes.node
}

export default connect(state => ({
  data: state.data,
  routing: state.routing
}))(Home)

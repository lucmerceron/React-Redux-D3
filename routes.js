import { Route, Router, IndexRoute } from 'react-router'
import React from 'react'

import Home from './src/components/containers/Home'
import DashboardZero from './src/components/containers/DashboardZero'
import DashboardOne from './src/components/containers/DashboardOne'
import DashboardTwo from './src/components/containers/DashboardTwo'

class Routes extends React.Component {
  constructor() {
    super()

    // Configure routes here as this solves a problem with hot loading where
    // the routes are recreated each time. (Not useful here because we do not have ho reloading)
    this.routes = (
      <Route path="/" component={Home}>
        <IndexRoute component={DashboardZero} />
        <Route path="dashboard-one" component={DashboardOne}/>
        <Route path="dashboard-two" component={DashboardTwo}/>
      </Route>
    )
  }

  render() {
    const { history } = this.props

    return (
      <Router history={history}>
        {this.routes}
      </Router>
    )
  }
}

Routes.propTypes = {
  history: React.PropTypes.object.isRequired
}

export default Routes

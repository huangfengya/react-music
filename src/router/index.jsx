import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../components/home'
import Rank from '../components/rank'
import Search from '../components/search'
import Singer from '../components/singer'
import NotFound from '../components/notfound'

export default class RouterMap extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rank" component={Rank} />
        <Route path="/search" component={Search} />
        <Route path="/singer" component={Singer} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

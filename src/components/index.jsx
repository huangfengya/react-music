import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink } from "react-router-dom"

import './index.less'
import RouterMap from '../router/'
import Player from './player/'

export default class RouterMapIndex extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <h1>React Music</h1>
          </header>
          <div className="nav">
            <NavLink activeClassName="active-nav" exact to="/">推荐</NavLink>
            <NavLink activeClassName="active-nav" to="/rank">排行</NavLink>
            <NavLink activeClassName="active-nav" to="/search">搜索</NavLink>
            <NavLink activeClassName="active-nav" to="/singer">歌手</NavLink>
          </div>
          <Player />
          <RouterMap />
        </div>
      </Router>
    )
  }
}

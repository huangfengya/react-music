import React, {Component} from 'react'

import HomeSlider from "./subpage/slider"
import HomeSongsList from './subpage/songs-list'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <HomeSlider />
        <HomeSongsList />
      </div>
    )
  }
}
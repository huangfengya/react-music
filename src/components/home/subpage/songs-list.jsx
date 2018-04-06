import React, {Component} from 'react'
import SongsList  from '../../../base/songs-list/'

import getNewSongs from '../../../api/newsongs.js'

export default class HomeSongsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songsList: []
    }
  }

  componentWillMount() {
    let songsList = sessionStorage.getItem('songsList') &&
      JSON.parse(sessionStorage.getItem('songsList'))

    if (songsList && songsList.length) {
      this.setState({
        songsList: songsList
      })
      return
    }

    getNewSongs().then(res=> {
      this.setState({
        songsList: res.data.data
      })
      console.log(this.state.songsList)
      sessionStorage.setItem('songsList', JSON.stringify(this.state.songsList))
    })
  }

  render() {
    return (
      <SongsList SongsList={this.state.songsList}/>
    )
  }
}
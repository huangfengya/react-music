import React, { Component } from 'react'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll/build/iscroll-probe'

import './index.less'

export default class SongsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: {
        scrollWheel: true,
        mouseWheel: true
      },
      songsList: this.props.SongsList
    }
  }

  playSongs(e) {
    
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      songsList: nextProps.SongsList
    })
  }

  render() {
    let songs = this.state.songsList.map((item, idx)=> {
      return (
        <div className="song-item" onClick={this.playSongs.bind(this)} key={idx}>{item.filename}</div>
      )
    })

    return (
      <div className="scroll" style={{height: '66vh'}}>
        <ReactIScroll className="iscroll" iScroll={iScroll} onScrollEnd={this.onScrollEnd} options={this.state.options}>
          <div>
            {songs}
          </div>
        </ReactIScroll>
      </div>
    )
  }
}
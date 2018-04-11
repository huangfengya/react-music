import React, { Component } from 'react'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll/build/iscroll-probe'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from '../../actions/song'

import './index.less'

class SongsList extends Component {
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

  playSongs(res) {
    // console.log(res)
    this.props.userInfoActions.songInfo(res)
    console.log(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      songsList: nextProps.SongsList
    })
  }

  render() {
    let songs = this.state.songsList.map((item, idx) => {

      return (
        <div className="song-item" onClick={this.playSongs.bind(this, {
          hash: item.hash,
          filename: item.filename
        })} key={idx}>{item.filename}</div>
      )
    })

    return (
      <div className="scroll" style={{ height: '66vh' }}>
        <ReactIScroll className="iscroll" iScroll={iScroll} onScrollEnd={this.onScrollEnd} options={this.state.options}>
          <div>
            {songs}
          </div>
        </ReactIScroll>
      </div>
    )
  }
}


// redux
function mapStateToProps(state) {
  return {
    songinfo: state.song,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsList)
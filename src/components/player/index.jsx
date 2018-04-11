import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.less'

import * as Action from '../../actions/player'

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  playerDisplay() {
    this.props.playerDisplay(false)
  }

  render() {
    return (
      <div className="player" style={{ display: this.props.display ? 'block' : 'none' }}>
        <span onClick={this.playerDisplay.bind(this)}>close</span>
        <audio src="http://fs.open.kugou.com/b299ac2f4f002e39690f29c457492572/5ac878e9/G008/M00/03/13/qIYBAFUAcwGAcAXJABPPg5W8DIY927.m4a"></audio>
      </div>
    )
  }
}

// redux
function mapStateToProps(state) {
  return {
    display: state.player
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Action, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)
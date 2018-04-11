import * as actionTypes from '../constants/song'

export function playerDisplay(data) {
  return {
    type: actionTypes.PLAYER_DISPLAY,
    data
  }
}
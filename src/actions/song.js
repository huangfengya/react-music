import * as actionTypes from "../constants/song"

export function songInfo(data) {
  return {
    type: actionTypes.SONG_INFO,
    data
  }
}

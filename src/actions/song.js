import * as actionTypes from "../constants/song"

export function songFilename(data) {
  return {
    type: actionTypes.SONG_FILENAME,
    data
  }
}

export function songHash(data) {
  return {
    type: actionTypes.SONG_HASH,
    data
  }
}
import * as actionTypes from '../constants/song'

const initialState = {}

export default function song(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SONG_FILENAME:
      return action.data

    case actionTypes.SONG_HASH:
      return action.data

    default:
      return state
  }
}
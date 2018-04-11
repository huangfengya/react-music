import * as actionTypes from '../constants/song'

const initialState = {}

export default function song(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SONG_INFO:
      return action.data

    default:
      return state
  }
}
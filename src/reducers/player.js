import * as actionTypes from "../constants/song"

const initialState = false

export default function playerDisplay(state = initialState, action) {
  switch (action.type) {
    case actionTypes.PLAYER_DISPLAY:
      return action.data
  
    default:
      return state
  }
}
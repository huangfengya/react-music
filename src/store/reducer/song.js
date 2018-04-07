import * as types from '../constant/song'

export default (state, action) => {
  switch (action.type) {
    case types.SET_FILENAME:
      return 'aaa'
    
    case types.SET_HASH:
      return 'bbb'

    default:
      return state
  }
}
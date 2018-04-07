import * as types from '../constant/song'

export function setSong(name) {
  return {
    type: types.SET_FILENAME,
    name
  }
}

export function setHash(hash) {
  return {
    type: types.SET_HASH,
    hash
  }
} 
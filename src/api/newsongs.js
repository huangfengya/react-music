import { axios } from '../api/axios'

export default function getNewSongs() {
  const url = 'http://m.kugou.com/?json=true'

  return axios.get(url)
}
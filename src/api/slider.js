import { axios } from '../common/js/axios'

export function getSlider() {
  const url = 'https://szc.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const param = {
    g_tk: 5381,
    uin: 0,
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'h5',
    needNewCode: 1
  }

  return axios.get(url, param)
}
import config from '../config.json'
import axios from './httpService'

export function getGenres() {
  return axios.get(config.apiUrl + '/genres')
}

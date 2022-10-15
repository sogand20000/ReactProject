import axios from './httpService'
import config from '../config.json'

const apiEndpoint = config.apiUrl + '/auth'
export function login(email, password) {
  return axios.post(apiEndpoint, { email, password })
}

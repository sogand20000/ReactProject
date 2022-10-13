import axios from './httpService'
import config from '../config.json'

const apiEndpoint = config.apiUrl + '/movies'
function movieUrl(id) {
  return `${apiEndpoint}/${id}`
}
export function getMovies() {
  return axios.get(apiEndpoint)
}

export function getMovie(id) {
  return axios.get(config.apiUrl + '/movies/' + id)
}
export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie }
    delete body._id
    return axios.put(movieUrl(movie._id), movie)
  }

  return axios.post(apiEndpoint, movie)
}

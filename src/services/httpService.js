import axios from 'axios'
import { toast } from 'react-toastify'
import * as Sentry from '@sentry/react'
import logger from './logService'

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500
  if (!expectedError) {
    toast('Logging the error', error)
    logger.log(error)
    console.log('Logging the error', error)
    alert('An unexpected error occurred')
  }

  return Promise.reject(error)
})
export default axios

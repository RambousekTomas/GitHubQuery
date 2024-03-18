import axios, { CancelTokenSource } from 'axios'

export const BASE_URL = 'https://api.github.com/'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
})

let cancelTokenSource: CancelTokenSource | undefined = undefined

axiosInstance.interceptors.request.use((config) => {
  if (cancelTokenSource) {
    cancelTokenSource.cancel('Operation canceled due to new request.')
  }

  cancelTokenSource = axios.CancelToken.source()
  config.cancelToken = cancelTokenSource.token

  return config
})

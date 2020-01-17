import axios from 'axios'
const baseUrl = '/api/game'

const getStatus = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const postStatus = status => {
  const request = axios.put(baseUrl, status)
  return request.then(response=>response.data)
}

export default { getStatus, postStatus }
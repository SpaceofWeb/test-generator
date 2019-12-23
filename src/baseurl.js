import axios from 'axios'

export default () => {
  // __API__ = http://api.service.com
  return axios.create({baseUrl: 'http://localhost:3000'})
}
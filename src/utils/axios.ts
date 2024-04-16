import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:3001/api/v1'
  // headers: {
  //   Authorization: 'Bearer'
  // }
})

export default axios

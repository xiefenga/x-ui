import axios from 'axios'

const request = axios.create()

request.interceptors.response.use(resp => resp.data)

export default request
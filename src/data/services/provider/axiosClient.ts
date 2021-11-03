import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://regex-quiz-app.herokuapp.com'
})

export default axiosClient

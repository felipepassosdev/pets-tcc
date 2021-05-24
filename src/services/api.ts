import axios from 'axios'

const api = axios.create({
    baseURL: 'http://petfinder-ope.herokuapp.com/',
})

export default api

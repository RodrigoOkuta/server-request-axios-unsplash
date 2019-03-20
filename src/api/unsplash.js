import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 21ee888d9c69f118d63519b969b25471f13a41f7f02c13b8500456aa0921cf45'
    }
})
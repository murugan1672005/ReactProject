import axios from 'axios'
const KEY="AIzaSyCU9G8evfHwvfOoEShSzZvralbp0NfYt-Q"
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:
    {
        part:"snippet",
        maxResults:5,
        key:KEY
    },
    headers:{}
})
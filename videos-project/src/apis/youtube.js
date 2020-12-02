import axios from 'axios';

const KEY = 'AIzaSyChS4whWtjntvtBCfepGC-ofZUMn8d0h3Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,     
    }
});

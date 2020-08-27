import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers:{
        'user-key': 'e5a967bf43adaa8f07126651250ae95c'
    }
});
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-cce38.firebaseio.com/'
});

export default instance;
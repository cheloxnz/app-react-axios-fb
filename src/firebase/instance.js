import axios from 'axios';

export default axios.create({
    baseURL: 'https://crud-operations-68491.firebaseio.com/'
});
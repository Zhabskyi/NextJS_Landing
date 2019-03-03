import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://rest-node-course-api.herokuapp.com'
});

export default instance;
import axios from 'axios';
import {Constants} from '../constants/Constants';

const apiClient = axios.create({
  baseURL: `${Constants.url}`, // Replace with your FastAPI URL
});

export default apiClient;

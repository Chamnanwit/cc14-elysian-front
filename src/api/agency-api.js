import axios from './axios';

export const getAllAgent = () => axios.get('/agent/all-agency');
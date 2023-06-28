import axios from './axios';

export const getAllAgent = () => axios.get('/agent/all-agency');
export const delteAgent = () => axios.delete('/agent/all-agency');
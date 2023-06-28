import axios from './axios';

export const getAllAgent = () => axios.get('/agent/all-agency');
export const deleteAgent = (id) => axios.delete(`/agent/delete-profileagency/${id}`);
export const updateAgent = (input) => axios.patch("/agent/update-profileagency", input);
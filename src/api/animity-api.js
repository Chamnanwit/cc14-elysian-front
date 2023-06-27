import axios from './axios';

export const getAnimityAll = () => axios.get('/admin/optionaltype');
export const createAnimity = (input) => axios.post('/admin/create-optionaltype', input);
export const updateAnimity = (input) => axios.patch("/admin/update-optionaltype", input);
export const deleteAnimity = (id) => axios.delete(`/admin/delete-optionaltype/${id}`);


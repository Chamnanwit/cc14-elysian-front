import axios from './axios';

export const getPricingPlan = () => axios.get('/admin/pricing-plan');
export const createPricingPlan = (input) => axios.post('/admin/create-pricing-plan', input);
export const updatePricingPlan = (input) => axios.patch("/admin/update-pricing-plan", input);
export const deletePricingPlan = (id) => axios.delete(`/admin/delete-pricing-plan/${id}`);
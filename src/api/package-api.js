import axios from './axios';

export const getPricingPlan = () => axios.get('/admin/pricing-plan');
export const createPricingPlan = (input) => axios.post('/admin/pricing-plan', input);
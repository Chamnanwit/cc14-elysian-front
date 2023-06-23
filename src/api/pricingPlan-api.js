import axios from './axios';

export const getPricingPlan = () => axios.get('/admin/pricing-plan');
export const createPricingPlan = () => axios.post('/admin/pricing-plan');
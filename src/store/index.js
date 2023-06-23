import { configureStore } from '@reduxjs/toolkit';
import pricingPlanReducer from '../features/packages/slice/pricingPlan-slice';

const store = configureStore({
  reducer: {
    pricingPlan: pricingPlanReducer
  }
});

export default store;
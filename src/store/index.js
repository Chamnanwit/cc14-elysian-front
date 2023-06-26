import { configureStore } from '@reduxjs/toolkit';
import pricingPlanReducer from '../features/packages/slice/pricingPlan-slice';
import animityReducer from '../features/addanimity/slice/aminity-slice';

const store = configureStore({
  reducer: {
    pricingPlan: pricingPlanReducer,
    animity: animityReducer,
  }
});

export default store;
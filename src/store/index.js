import { configureStore } from '@reduxjs/toolkit';
import pricingPlanReducer from '../features/packages/slice/pricingPlan-slice';
import animityReducer from '../features/addanimity/slice/aminity-slice';
import adminViewAgentReducer from '../features/agencyInformation/slice/adminviewagency-slice';

const store = configureStore({
  reducer: {
    pricingPlan: pricingPlanReducer,
    animity: animityReducer,
    adminViewAgent: adminViewAgentReducer,
  }
});

export default store;
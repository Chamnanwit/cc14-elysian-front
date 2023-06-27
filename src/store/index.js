import { configureStore } from '@reduxjs/toolkit';
import pricingPlanReducer from '../features/packages/slice/pricingPlan-slice';
// import adminInformationReducer from '../features/adminInformation/slice/adminInformation';

const store = configureStore({
  reducer: {
    pricingPlan: pricingPlanReducer,
    // adminInformation: adminInformationReducer,
  }
});

export default store;
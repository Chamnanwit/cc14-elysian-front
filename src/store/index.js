import { configureStore } from '@reduxjs/toolkit';
import pricingPlanReducer from '../features/packages/slice/pricingPlan-slice';
import adminInformationReducer from '../features/adminInformation/slice/admin-slice';
import animityReducer from '../features/addanimity/slice/aminity-slice';

const store = configureStore({
  reducer: {
    pricingPlan: pricingPlanReducer,
    adminInformation: adminInformationReducer,
    animity: animityReducer,
  }
});

export default store;
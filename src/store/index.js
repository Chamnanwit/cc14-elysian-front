<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import pricingPlanReducer from '../features/packages/slice/pricingPlan-slice';
import adminInformationReducer from '../features/adminInformation/slice/admin-slice';
import animityReducer from '../features/addanimity/slice/aminity-slice';
=======
import { configureStore } from "@reduxjs/toolkit";
import pricingPlanReducer from "../features/packages/slice/pricingPlan-slice";
import animityReducer from "../features/addanimity/slice/aminity-slice";
import adminViewAgentReducer from "../features/agencyInformation/slice/adminviewagency-slice";
import authReducer from "../features/auth/slice/authSlice";
>>>>>>> 3576d8445a0dab8bf5876a67ca107502f2df6554

const store = configureStore({
  reducer: {
    pricingPlan: pricingPlanReducer,
    adminInformation: adminInformationReducer,
    animity: animityReducer,
    adminViewAgent: adminViewAgentReducer,
    auth: authReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import pricingPlanReducer from "../features/packages/slice/pricingPlan-slice";
import animityReducer from "../features/addanimity/slice/aminity-slice";
import adminViewAgentReducer from "../features/agencyInformation/slice/adminviewagency-slice";
import authReducer from "../features/auth/slice/authSlice";

const store = configureStore({
  reducer: {
    pricingPlan: pricingPlanReducer,
    animity: animityReducer,
    adminViewAgent: adminViewAgentReducer,
    auth: authReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import pricingPlanReducer from "../features/packages/slice/pricingPlan-slice";
import authReducer from "../features/auth/slice/authSlice";

const store = configureStore({
  reducer: {
    pricingPlan: pricingPlanReducer,
    auth: authReducer,
  },
});

export default store;

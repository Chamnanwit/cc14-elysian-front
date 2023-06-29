import { configureStore } from "@reduxjs/toolkit";
import pricingPlanReducer from "../features/packages/slice/pricingPlan-slice";
import animityReducer from "../features/addanimity/slice/aminity-slice";
import userPropertiesReducer from "../features/userProperties/slice/userProperties";
import adminViewAgentReducer from "../features/agencyInformation/slice/adminviewagency-slice";
import adminInformationReducer from "../features/adminInformation/slice/admin-slice";
import authReducer from "../features/auth/slice/authSlice";
import profileAgncyReducer from "../features/myprofile/slice/myProfile-slice";

const store = configureStore({
  reducer: {
    pricingPlan: pricingPlanReducer,
    adminInformation: adminInformationReducer,
    animity: animityReducer,
    userProperties: userPropertiesReducer, //ดึงทั้งหน้าของ slice
    adminViewAgent: adminViewAgentReducer,
    auth: authReducer,
    profileAgncy: profileAgncyReducer,
  },
});

export default store;

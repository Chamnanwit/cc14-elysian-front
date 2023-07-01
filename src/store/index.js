import { configureStore } from "@reduxjs/toolkit";
import pricingPlanReducer from "../features/packages/slice/pricingPlan-slice";
import animityReducer from "../features/addanimity/slice/aminity-slice";
import userPropertiesReducer from "../features/userProperties/slice/userProperties";
import adminViewAgentReducer from "../features/agencyInformation/slice/adminviewagency-slice";
import adminInformationReducer from "../features/adminInformation/slice/admin-slice";
import authReducer from "../features/auth/slice/authSlice";
import profileAgncyReducer from "../features/myprofile/slice/myProfile-slice";
import propertyPlanReducer from "../features/createproperty/slice/createproperty-slice";
import purchaseHistoryReducer from "../features/purchase-history/slice/purchase-slice";
import agencyOtpReducer from "../features/agencyotp/slice/agencyotp-slice";
import searchListReducer from "../features/search/slice/search-slice";
import paymentReducer from "../features/payment/slice/payment-slice";
import dashboardReducer from "../features/dashboard/slice/dashboard-slice";

const store = configureStore({
  reducer: {
    pricingPlan: pricingPlanReducer,
    adminInformation: adminInformationReducer,
    animity: animityReducer,
    userProperties: userPropertiesReducer, //ดึงทั้งหน้าของ slice
    adminViewAgent: adminViewAgentReducer,
    auth: authReducer,
    dashboard: dashboardReducer,
    profileAgncy: profileAgncyReducer,
    propertyPlan: propertyPlanReducer,
    agencyOtp: agencyOtpReducer,
    payment: paymentReducer,
    purchaseHistory: purchaseHistoryReducer,
    requestOtpAsync: agencyOtpReducer,
    searchList: searchListReducer,
  },
});

export default store;

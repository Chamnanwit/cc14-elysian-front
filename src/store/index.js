import { configureStore } from '@reduxjs/toolkit';
import pricingPlanReducer from '../features/packages/slice/pricingPlan-slice';
<<<<<<< HEAD
// import adminInformationReducer from '../features/adminInformation/slice/adminInformation';
=======
import animityReducer from '../features/addanimity/slice/aminity-slice';
>>>>>>> 58b794e5949ec3011d8f91a307faa6dc669a70a2

const store = configureStore({
  reducer: {
    pricingPlan: pricingPlanReducer,
<<<<<<< HEAD
    // adminInformation: adminInformationReducer,
=======
    animity: animityReducer,
>>>>>>> 58b794e5949ec3011d8f91a307faa6dc669a70a2
  }
});

export default store;
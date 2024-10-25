import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalRequests: 0,
  totalPayouts: 0,
  totalBalance: 0,
  totalConfigRequests: 0,
  payoutInfo: [],
  withdrawalDetails: {},
  adminData: {},
  paymentData: [],
  isLoading: false,
};

const applicationsSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    getTotalRequests: (state, action) => {
      state.totalRequests = action.payload;
    },
    getTotalPayouts: (state, action) => {
      state.totalPayouts = action.payload;
    },
    getTotalBalance: (state, action) => {
      state.totalBalance = action.payload;
    },
    getTotalConfigRequest: (state, action) => {
      state.totalConfigRequests = action.payload
    },
    getPayoutInfo: (state, action) => {
      state.payoutInfo = action.payload;
    },
    getWithdrawalDetails: (state, action) => {
      state.withdrawalDetails = action.payload;
    },
    getAdminData: (state, action) => {
      state.adminData = action.payload;
    },
    getPaymentData: (state, action) => {
      state.paymentData = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem('paymentData', JSON.stringify(action.payload));
      }
    },
    clearPaymentData: (state) => {
      state.paymentData = [];
      if (typeof window !== "undefined") {
        localStorage.removeItem('paymentData');
      }
    },
    initializePaymentData: (state) => {
      if (typeof window !== "undefined") {
        const storedPaymentData = localStorage.getItem('paymentData');
        state.paymentData = storedPaymentData ? JSON.parse(storedPaymentData) : [];
      }
    },
  },
});

export const {
  getTotalRequests,
  getTotalPayouts,
  getTotalBalance,
  getTotalConfigRequest,
  getPayoutInfo,
  getWithdrawalDetails,
  getAdminData,
  getPaymentData,
  clearPaymentData,
  initializePaymentData,
  setIsLoading,
} = applicationsSlice.actions;

export default applicationsSlice.reducer;

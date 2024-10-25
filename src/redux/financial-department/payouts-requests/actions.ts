import { API } from "@/utils/api";
import { AxiosError } from "axios";
import { store } from "@/redux/store";
import { alertNotification } from "@/redux/auth/actions";
import { setIsLoading, getTotalRequests, getTotalPayouts, getTotalBalance, getTotalConfigRequest, getPayoutInfo, getWithdrawalDetails, getAdminData } from "./payoutRequestSlice";


export const fetchTotalRequests = async () => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));
    try {
      const response = await API.get("/api/v1/finance/total-requests");
      const jsonData = response?.data;
      if (jsonData !== null || jsonData !== undefined) {
        dispatch(setIsLoading(false));
        dispatch(getTotalRequests(jsonData))
      } else {
        dispatch(setIsLoading(false));
        alertNotification("Failed to fetch data. Please try again.", "error");
      }
    } catch (error: any) {
      dispatch(setIsLoading(false));
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };


export const fetchTotalPayouts = async () => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));
    try {
      const response = await API.get("/api/v1/finance/total-payouts");
      const jsonData = response?.data;
      if (jsonData !== null || jsonData !== undefined) {
        dispatch(setIsLoading(false));
        dispatch(getTotalPayouts(jsonData))
      } else {
        dispatch(setIsLoading(false));
        alertNotification("Failed to fetch data. Please try again.", "error");
      }
    } catch (error: any) {
      dispatch(setIsLoading(false));
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };


export const fetchTotalBalance = async () => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));
    try {
      const response = await API.get("/api/v1/finance/total-balance");
      const jsonData = response?.data;
      if (jsonData !== null || jsonData !== undefined) {
        dispatch(setIsLoading(false));
        dispatch(getTotalBalance(jsonData))
      } else {
        dispatch(setIsLoading(false));
        alertNotification("Failed to fetch data. Please try again.", "error");
      }
    } catch (error: any) {
      dispatch(setIsLoading(false));
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };


export const fetchPayoutInfo = async () => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));
    try {
      const response = await API.get("/api/v1/finance/content-creator-payout-info");
      const jsonData = response?.data;
      if (jsonData) {
        dispatch(setIsLoading(false));
        dispatch(getPayoutInfo(jsonData))
      } else {
        dispatch(setIsLoading(false));
        alertNotification("Failed to fetch data. Please try again.", "error");
      }
    } catch (error: any) {
      dispatch(setIsLoading(false));
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };

  export const fetchWithdrawalDetails = async (creatorId: any) => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));
    try {
      const response = await API.get(`/api/v1/finance/content-creator/withdrawal-details/${creatorId}`);
      const jsonData = response?.data;
      if (jsonData) {
        dispatch(setIsLoading(false));
        dispatch(getWithdrawalDetails(jsonData));
        return jsonData
      } else {
        dispatch(setIsLoading(false));
        alertNotification("Failed to fetch data. Please try again.", "error");
      }
    } catch (error) {
      dispatch(setIsLoading(false));
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };

  export const fetchConfigurationRequest = async () => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));
    try {
      const response = await API.get("/api/v1/finance/total-configuration-request");
      const jsonData = response?.data;
      if (jsonData !== null || jsonData !== undefined) {
        dispatch(setIsLoading(false));
        dispatch(getTotalConfigRequest(jsonData))
      } else {
        dispatch(setIsLoading(false));
        alertNotification("Failed to fetch data. Please try again.", "error");
      }
    } catch (error: any) {
      dispatch(setIsLoading(false));
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };

  export const adminVerify = async (adminId: any) => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));
    try {
      const response = await API.get(`/api/v1/finance/verify/${adminId}`);
      const jsonData = response?.data;
      if (jsonData) {
        dispatch(setIsLoading(false));
        dispatch(getAdminData(jsonData));
        return jsonData
      } else {
        dispatch(setIsLoading(false));
        alertNotification("Failed to verify the admin. Please try again.", "error");
      }
    } catch (error) {
      dispatch(setIsLoading(false));
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };


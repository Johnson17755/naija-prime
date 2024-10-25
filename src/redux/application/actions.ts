import { API } from "@/utils/api";
import { AxiosError } from "axios";
import { store } from "@/redux/store";
import { setIsLoading, setIsFetching, setIsShortlisted, setIsRejected, getAllApplications, getShortlistedApplications, removeApplication, getRejectedApplications } from "./applicationSlice";
import { alertNotification } from "../auth/actions";


export const createJobApplication = async (
    data: {
      firstName: any;
      lastName: any;
      otherName: any;
      age: any;
      sex: any;
      state: any;
      phoneNumber: string;
      email: string;
      emergencyContact: any;
      fullAddress: any;
      qualifications: any;
      yearsOfExperience: any;
      previousOrganization: any;
      positionAppliedFor: any;
      governmentIdUrl: any;
      certificateUrl: any;
    },
    reset: () => void,
    closeModal: () => void 
  ) => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));
    const applicationData = {
      firstName: data.firstName,
      lastName: data.lastName,
      otherName: data.otherName,
      age: data.age,
      sex: data.sex,
      state: data.state,
      phoneNumber: data.phoneNumber,
      email: data.email,
      emergencyContact: data.emergencyContact,
      fullAddress: data.fullAddress,
      qualifications: data.qualifications,
      yearsOfExperience: data.yearsOfExperience,
      previousOrganization: data.previousOrganization,
      positionAppliedFor: data.positionAppliedFor,
      governmentIdUrl: data.governmentIdUrl,
      certificateUrl: data.certificateUrl,
    };
  
    try {
      const response = await API.post("/job-applications", applicationData);
      const jsonData = response?.data;
      if (jsonData) {
        dispatch(setIsLoading(false));
        reset();
        alertNotification("Job application created successfully.", "success");
        closeModal();
      } else {
        dispatch(setIsLoading(false));
        alertNotification("Application failed to create. Please try again.", "error");
      }
    } catch (error: any) {
      dispatch(setIsLoading(false));
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };
  

  export const getJobApplication = async () => {
    const dispatch = store.dispatch;
    dispatch(setIsFetching(true));
    try {
      const response = await API.get("/job-applications");
      const jsonData = response?.data;
      if (jsonData) {
        dispatch(setIsFetching(false));
        dispatch(getAllApplications(jsonData))
      } else {
        dispatch(setIsFetching(false));
        alertNotification("Failed to fetch data. Please try again.", "error");
      }
    } catch (error: any) {
      dispatch(setIsFetching(false));
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };

  export const deleteApplication = async (applicationId: number) => {
    try {
      await API.delete(`/job-applications/${applicationId}`);
    } catch (error) {
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };

  export const postShortlisted = async (applicationId: number) => {
    const dispatch = store.dispatch;
    dispatch(setIsShortlisted(true));
    try {
      const response = await API.post("/job-applications/shortlist", {
        id: applicationId,
        status: "shortlisted",
      });
      const jsonData = response.data;
      if (jsonData) {
        dispatch(setIsShortlisted(false));
        dispatch(removeApplication(applicationId));
        await deleteApplication(applicationId);
        alertNotification("Job shortlisted successfully.", "success");
      } else {
        dispatch(setIsShortlisted(false));
        alertNotification("Job failed to shortlist. Please try again.", "error");
      }
    } catch (error) {
      dispatch(setIsShortlisted(false));
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };

  export const fetchShortlistedApplications = async () => {
    const dispatch = store.dispatch;
    dispatch(setIsFetching(true))
    try {
      const response = await API.get('/job-applications/total-shortlisted')
      const jsonData = response?.data
      if (jsonData) {
        dispatch(setIsFetching(false))
        dispatch(getShortlistedApplications(jsonData))
      } else {
        dispatch(setIsFetching(false))
        alertNotification("Failed to fetch data. Please try again.", "error");
      }
    } catch (error) {
      dispatch(setIsFetching(false))
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  }

  export const postRejected = async (applicationId: number) => {
    const dispatch = store.dispatch;
    dispatch(setIsRejected(true));
    try {
      const response = await API.post("/job-applications/reject", {
        id: applicationId,
        status: "rejected",
      });
      const jsonData = response.data;
      if (jsonData) {
        dispatch(setIsRejected(false));
        dispatch(removeApplication(applicationId));
        await deleteApplication(applicationId);
        alertNotification("Job rejected successfully.", "success");
      } else {
        dispatch(setIsRejected(false));
        alertNotification("Job failed to reject. Please try again.", "error");
      }
    } catch (error) {
      dispatch(setIsRejected(false));
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };

  export const fetchRejectedApplications = async () => {
    const dispatch = store.dispatch;
    dispatch(setIsFetching(true));
    try {
      const response = await API.get('/job-applications/total-rejected')
      const jsonData = response?.data
      if (jsonData) {
        dispatch(setIsFetching(false))
        dispatch(getRejectedApplications(jsonData))
      } else {
        dispatch(setIsFetching(false))
        alertNotification("Failed to fetch data. Please try again.", "error");
      }
    } catch (error) {
      dispatch(setIsFetching(false))
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  }

 
  
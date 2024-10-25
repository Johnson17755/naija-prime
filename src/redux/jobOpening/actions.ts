import { API } from "@/utils/api";
import { AxiosError } from "axios";
import { store } from "@/redux/store";
import { setIsLoading, setIsAddJobLoading } from "./jobOpeningSlice";
import { alertNotification } from "../auth/actions";
import { getJobOpenings } from "./jobOpeningSlice";


export const createJobOpening = async (
    data: {
      jobTitle: any;
      department: any;
      candidates: number;
      qualifications: any;
      salary: any;
      expireDate: any;
      status: string;
    },
    reset: () => void,
    closeModal: () => void 
  ) => {
    const dispatch = store.dispatch;
    dispatch(setIsAddJobLoading(true));
    const jobData = {
      jobTitle: data.jobTitle,
      department: data.department,
      candidates: Number(data.candidates),
      qualifications: data.qualifications,
      salary: data.salary,
      expireDate: data.expireDate,
      status: "Active",
    };
  
    try {
      const response = await API.post("/job-openings", jobData);
      const jsonData = response?.data;
      if (jsonData?.success) {
        dispatch(setIsAddJobLoading(false));
        // dispatch(addJobOpenings(jsonData.data))
        reset();
        alertNotification(jsonData?.message, "success");
        closeModal();
      } else {
        dispatch(setIsAddJobLoading(false));
        alertNotification("Job failed to create. Please try again.", "error");
      }
    } catch (error: any) {
      dispatch(setIsAddJobLoading(false));
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };

export const getAllJobOpenings = async () => {
  const dispatch = store.dispatch;
  dispatch(setIsLoading(true));
  try {
    const response = await API.get('/job-openings')
    const jsonData = response.data
    if (jsonData) {
      dispatch(setIsLoading(false))
      dispatch(getJobOpenings(jsonData))
    } else {
      dispatch(setIsLoading(false))
      alertNotification("Failed to fetch data. Try again later", "error")
    }
  } catch (error) {
    dispatch(setIsLoading(false));
    if (error instanceof AxiosError) {
      alertNotification(error?.response?.data.message, "error");
    }
  }
}
  
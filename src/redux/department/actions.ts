import { AxiosError } from "axios";
import { alertNotification } from "../auth/actions";
import { store } from "../store";
import { getAllDepartment, setIsLoading } from "./departmentSlice";
import { API } from "@/utils/api";

export const fetchDepartment = async () => {
  const dispatch = store.dispatch;
  dispatch(setIsLoading(true));
  try {
    const response = await API.get(`/hr/all-department-counts`);
    const jsonData = response?.data;
    if (jsonData) {
      dispatch(setIsLoading(false));
      dispatch(getAllDepartment(jsonData));
    } else {
      dispatch(setIsLoading(false));
      alertNotification("Failed to fetch data. Try again later", "error");
    }
  } catch (error) {
    dispatch(setIsLoading(false));
    if (error instanceof AxiosError) {
      alertNotification(error?.response?.data.message, "error");
    }
  }
};

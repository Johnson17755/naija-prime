import { AxiosError } from "axios";
import { alertNotification } from "../auth/actions";
import { store } from "../store";
import { getEmployees, setIsLoading } from "./employeesSlice";
import { API } from "@/utils/api";

export const getAllEmployees = async () => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));
    try {
      const response = await API.get('/hr')
      const jsonData = response.data
      if (jsonData) {
        dispatch(setIsLoading(false))
        dispatch(getEmployees(jsonData))
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
    
  export const deleteEmployees = async (id: any) => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));
    try {
      // Send DELETE request to the endpoint with the employee ID
      await API.delete(`/hr/${id}`);
      // Fetch the updated list of employees
      const response = await API.get('/hr');
      const jsonData = response.data;
      if (jsonData) {
        dispatch(setIsLoading(false));
        dispatch(getEmployees(jsonData));
        alertNotification("Employee deleted successfully", "success");
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
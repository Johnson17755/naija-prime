import { API } from "@/utils/api";
import { AxiosError } from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { toast, TypeOptions } from "react-toastify";
import { store } from "@/redux/store";
import Cookies from "js-cookie";
import { setIsLoading } from "./authSlice";


export const createEmployee = async (
  data: {
    firstName: any;
    secondName: any;
    lastName: any;
    imageUrl: any;
    email: string;
    phoneNumber: string;
    hiredDate: any;
    departmentPassword: string;
    uniquePassKey: string;
    userRole: string;
  },
  reset: () => void,
  closeModal: () => void 
) => {
  const dispatch = store.dispatch;
  dispatch(setIsLoading(true));
  const emplyeesData = {
    firstName: data.firstName,
    secondName: data.secondName,
    lastName: data.lastName,
    imageUrl: data.imageUrl,
    email: data.email,
    phoneNumber: data.phoneNumber,
    hiredDate: data.hiredDate,
    departmentPassword: data.departmentPassword,
    uniquePassKey: data.uniquePassKey,
    userRole: data.userRole
  };

  try {
    const response = await API.post("/hr/register", emplyeesData);
    console.log("REsponse:", response)
    const jsonData = response?.data;
    if (jsonData) {
      dispatch(setIsLoading(false));
      reset();
      alertNotification("Account created successfully.", "success");
      localStorage.setItem("email", emplyeesData.email);
      closeModal();
    } else {
      dispatch(setIsLoading(false));
      alertNotification("Registration failed. Please try again.", "error");
    }
  } catch (error: any) {
    dispatch(setIsLoading(false));
    if (error instanceof AxiosError) {
      alertNotification(error?.response?.data.message, "error");
    }
  }
};


export const alertNotification = (message: string, type: TypeOptions) => {
    toast(message, {
      type: type,
    });
  };
  

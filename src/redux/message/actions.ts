import { API } from "@/utils/api";
import { AxiosError } from "axios";
import { store } from "@/redux/store";
import { setIsLoading, getAllMessages } from "./messageSlice";
import { alertNotification } from "../auth/actions";


export const fetchMesagesInbox = async () => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));
    try {
      const response = await API.get("/api/messaging/inbox");
      const jsonData = response?.data;
      if (jsonData) {
        dispatch(setIsLoading(false));
        dispatch(getAllMessages(jsonData))
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
}

import { API } from "@/utils/api";
import { AxiosError } from "axios";
import { store } from "@/redux/store";
import { alertNotification } from "@/redux/auth/actions";
import { setIsLoading, getAllMoviesData, getMovieDetailsData, getMovieIds } from "./configurationSlice";


export const fetchAllMovies = async () => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true))
    try {
      const response = await API.get(`/api/v1/finance/requesting-config-and-pending?page=${0}&size=${50}`)
      const jsonData = response?.data
      if (jsonData) {
        dispatch(setIsLoading(false))
        dispatch(getAllMoviesData(jsonData))
        const allIds = jsonData.content?.map((item: any) => Number(item.id))
        dispatch(getMovieIds(allIds))
      } else {
        dispatch(setIsLoading(false))
        alertNotification("Failed to fetch data. Please try again.", "error");
      }
    } catch (error) {
      dispatch(setIsLoading(false))
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  }

export const fetchMovieDetails = async (movieId: number) => {
  const dispatch = store.dispatch;
    dispatch(setIsLoading(true))
    try {
      const response = await API.get(`/api/v1/finance/get-movie-by-id/${movieId}`)
      const jsonData = response?.data
      if (jsonData) {
        dispatch(setIsLoading(false))
        dispatch(getMovieDetailsData(jsonData))
      } else {
        dispatch(setIsLoading(false))
        alertNotification("Failed to fetch Movie Details. Please try again.", "error");
      }
    } catch (error) {
      dispatch(setIsLoading(false))
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobOpening } from "@/types";

interface AppProps {
    allJobOpenings: Array<JobOpening>;
    isLoading: boolean;
    isAddJobLoading: boolean;
}

const initialState: AppProps = {
    allJobOpenings: [],
    isLoading: false,
    isAddJobLoading: false
};

const applicationsSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsAddJobLoading: (state, action: PayloadAction<boolean>) => {
      state.isAddJobLoading = action.payload
    },
    // addJobOpenings: (state, action: PayloadAction<JobOpening>) => {
    //   state.postJobOpening.push(action.payload)
    // },
    getJobOpenings: (state, action: PayloadAction<JobOpening[]>) => {
      state.allJobOpenings = action.payload
    }
  },
});

export const {
    getJobOpenings,
    setIsLoading,
    setIsAddJobLoading
} = applicationsSlice.actions;

export default applicationsSlice.reducer;

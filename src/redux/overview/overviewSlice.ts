import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OverviewProps } from "@/types";

interface AppProps {
  list: Array<OverviewProps>;
  isLoading: boolean;
}

const initialOverviewState: AppProps = {
  list: [],
  isLoading: false,
};

const employeeSlice = createSlice({
  name: "department",
  initialState: initialOverviewState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    getAllOverview: (state, action: PayloadAction<OverviewProps[]>) => {
      state.list = action.payload;
    }
  },
});

export const { setIsLoading, getAllOverview } =
  employeeSlice.actions;
export default employeeSlice.reducer;

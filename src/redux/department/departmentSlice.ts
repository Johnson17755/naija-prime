import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetDepartment } from "@/types";

interface AppProps {
  list: Array<GetDepartment>;
  isLoading: boolean;
}

const initialDepartmentState: AppProps = {
  list: [],
  isLoading: false,
};

const employeeSlice = createSlice({
  name: "department",
  initialState: initialDepartmentState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    getAllDepartment: (state, action: PayloadAction<GetDepartment[]>) => {
      state.list = action.payload;
    },
  },
});

export const { setIsLoading, getAllDepartment } = employeeSlice.actions;
export default employeeSlice.reducer;

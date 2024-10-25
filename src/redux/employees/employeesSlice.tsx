import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetEmployees } from "@/types";

interface AppProps {
  list: Array<GetEmployees>;
  isLoading: boolean;
}

const initialEmployeeState: AppProps = {
  list: [],
  isLoading: false,
};

const employeeSlice = createSlice({
  name: "employees",
  initialState: initialEmployeeState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    getEmployees: (state, action: PayloadAction<GetEmployees[]>) => {
      state.list = action.payload.sort(
        (a, b) =>
          new Date(b.hiredDate).getTime() - new Date(a.hiredDate).getTime()
      );
    },
    deleteEmployee: (state, action) => {
      state.list = state.list.filter(
        (employee) => employee.id !== action.payload
      );
    },
  },
});

export const { setIsLoading, getEmployees, deleteEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;

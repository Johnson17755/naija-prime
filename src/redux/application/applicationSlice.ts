import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Application } from "@/types";

interface AppProps {
  allApplications: Array<Application>;
  shortlistedApplications: Array<Application>;
  rejectedApplications: Array<Application>;
  isLoading: boolean;
  isFetching: boolean;
  isShortlisted: boolean;
  isRejected: boolean;
}

const initialState: AppProps = {
  allApplications: [],
  shortlistedApplications: [],
  rejectedApplications: [],
  isLoading: false,
  isFetching: false,
  isShortlisted: false,
  isRejected: false,
};

const applicationsSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    setIsShortlisted: (state, action) => {
      state.isShortlisted = action.payload;
    },
    setIsRejected: (state, action) => {
      state.isRejected = action.payload;
    },
    getAllApplications: (state, action: PayloadAction<Application[]>) => {
      state.allApplications = action.payload;
    },
    removeApplication: (state, action: PayloadAction<number>) => {
      state.allApplications = state.allApplications.filter(
        (app) => app.id !== action.payload
      );
    },
    getShortlistedApplications: (state, action: PayloadAction<Application[]>) => {
      state.shortlistedApplications = action.payload;
    },
    getRejectedApplications: (state, action: PayloadAction<Application[]>) => {
      state.rejectedApplications = action.payload
    }
  },
});

export const {
  getAllApplications,
  getShortlistedApplications,
  getRejectedApplications,
  setIsLoading,
  setIsFetching,
  setIsShortlisted,
  setIsRejected,
  removeApplication,
} = applicationsSlice.actions;

export default applicationsSlice.reducer;



// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Application } from "@/types";

// interface AppProps {
//   allApplications: Array<Application>;
//   shortlistedApplications: Array<Application>;
//   rejectedApplications: Array<Application>;
//   isLoading: boolean;
//   isFetching: boolean;
//   isShortlisted: boolean;
//   isRejected: boolean;
  
// }

// const initialState: AppProps = {
//   allApplications: [],
//   shortlistedApplications: [],
//   rejectedApplications: [],
//   isLoading: false,
//   isFetching: false,
//   isShortlisted: false,
//   isRejected: false
// };

// const applicationsSlice = createSlice({
//   name: "applications",
//   initialState,
//   reducers: {
//     setIsLoading: (state, action) => {
//       state.isLoading = action.payload
//     },
//     setIsFetching: (state, action) => {
//       state.isFetching = action.payload
//     },
//     setIsShortlisted: (state, action) => {
//       state.isShortlisted = action.payload
//     },
//     setIsRejected: (state, action) => {
//       state.isRejected = action.payload
//     },
//     getAllApplications: (state, action: PayloadAction<Application[]>) => {
//       state.allApplications = action.payload
//     },
//     setMoveToShortlisted: (state, action: PayloadAction<Application>) => {
//       const application = action.payload;
//       state.allApplications = state.allApplications.filter(
//         (app) => app.id !== application.id
//       );
//       state.shortlistedApplications.push(application);
//     },
//     setMoveToRejected: (state, action: PayloadAction<Application>) => {
//       const application = action.payload;
//       state.allApplications = state.allApplications.filter(
//         (app) => app.id !== application.id
//       );
//       state.rejectedApplications.push(application);
//     }
//   },
// });

// export const {
//   getAllApplications,
//   setMoveToShortlisted,
//   setMoveToRejected,
//   setIsLoading,
//   setIsFetching,
//   setIsShortlisted,
//   setIsRejected
// } = applicationsSlice.actions;

// export default applicationsSlice.reducer;

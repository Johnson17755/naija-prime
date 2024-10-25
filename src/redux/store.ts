import { Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth/authSlice";
import FDFormStepReducer from "./fd-forms/createFDFormsSlice"
import applicationsReducer from './application/applicationSlice';
import employeeReducer from './employees/employeesSlice'
import jobOpeningReducer from './jobOpening/jobOpeningSlice'
import getDepartmentReducer from "./department/departmentSlice"
import getOverviewReducer from "./overview/overviewSlice"
import getMessagesReducer from "./message/messageSlice"
import getTotalRequestsReducer from "./financial-department/payouts-requests/payoutRequestSlice"
import getTotalMoviesReducer from "./financial-department/configuration/configurationSlice"
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const reducers = combineReducers({
    user: userReducer,
    fdFormSteps: FDFormStepReducer,
    applications: applicationsReducer,
    employees: employeeReducer,
    jobOpenings: jobOpeningReducer,
    department: getDepartmentReducer,
    overview: getOverviewReducer,
    messages: getMessagesReducer,
    payoutRequests: getTotalRequestsReducer,
    movies: getTotalMoviesReducer
})

const persistConfig = {
    key: 'root',
    storage,
    version: 1
}

const persisitedReducer = persistReducer(persistConfig, reducers)

const rootReducer: Reducer = (state, action) => {
    if (action.type === "RESET") {
        storage.removeItem("persist:root");
        state = {}
        // state = undefined; // Use undefined instead of an empty object
    }
    return persisitedReducer(state, action)
}

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)

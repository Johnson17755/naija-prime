import { createSlice } from "@reduxjs/toolkit";

interface FormSteps {
    fdFormCurrentStep: number;
}

const initialFormStep: FormSteps = {
    fdFormCurrentStep: 1
}

export const FDFormStepSlice = createSlice({
    name: "fdForm",
    initialState: initialFormStep,
    reducers: {
        setFDFormCurrentStep: (state, action) => {
            state.fdFormCurrentStep = action.payload
        }
    }
})

export const {
    setFDFormCurrentStep
} = FDFormStepSlice.actions

export default FDFormStepSlice.reducer


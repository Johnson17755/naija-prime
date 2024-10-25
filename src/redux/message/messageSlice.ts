import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessageProps } from "@/types";

interface AppProps {
  allMessages: Array<MessageProps>
  isLoading: boolean;
}

const initialState: AppProps = {
  allMessages: [],
  isLoading: false,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    getAllMessages: (state, action: PayloadAction<MessageProps[]>) => {
      state.allMessages = action.payload;
    }
  },
});

export const {
    getAllMessages,
    setIsLoading,
} = messageSlice.actions;

export default messageSlice.reducer;

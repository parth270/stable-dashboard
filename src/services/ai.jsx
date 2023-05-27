import { createSlice } from "@reduxjs/toolkit";

const AISlice = createSlice({
  name: "Model",
  initialState: {
    files: [],
  },
  reducers: {
    setFiles: (state, action) => {
      state.files[0] = action.payload;
    },
  },
});

export const { setFiles } = AISlice.actions;

export default AISlice.reducer;

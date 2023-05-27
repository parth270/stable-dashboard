import { createSlice } from "@reduxjs/toolkit";

const AISlice = createSlice({
  name: "Model",
  initialState: {
    filesId:null,
  },
  reducers: {
    settingFiles: (state, action) => {
      state.filesId = action.payload;
    },
  },
});

export const { settingFiles } = AISlice.actions;

export default AISlice.reducer;

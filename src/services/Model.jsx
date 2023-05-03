import { createSlice } from "@reduxjs/toolkit";

const ModelSlice = createSlice({
  name: "Model",
  initialState: { loading: false },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {setLoading} = ModelSlice.actions;

export default ModelSlice.reducer;

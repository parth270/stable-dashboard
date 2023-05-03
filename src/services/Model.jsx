import { createSlice } from "@reduxjs/toolkit";

const ModelSlice = createSlice({
  name: "Model",
  initialState: { loading: false, forceStopLoad: false },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setForceStopLoad: (state, action) => {
      state.forceStopLoad = action.payload;
    },
  },
});

export const { setLoading, setForceStopLoad } = ModelSlice.actions;

export default ModelSlice.reducer;

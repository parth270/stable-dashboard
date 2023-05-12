import { createSlice } from "@reduxjs/toolkit";

const ModelSlice = createSlice({
  name: "Model",
  initialState: { loading: false, forceStopLoad: false, adminUrl: "" },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setForceStopLoad: (state, action) => {
      state.forceStopLoad = action.payload;
    },
    setAdminUrl: (state, action) => {
      state.adminUrl = action.payload;
    },
  },
});

export const { setLoading, setForceStopLoad, setAdminUrl } = ModelSlice.actions;

export default ModelSlice.reducer;

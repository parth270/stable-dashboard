import { createSlice } from "@reduxjs/toolkit";

const ModelSlice = createSlice({
  name: "Model",
  initialState: {
    loading: false,
    forceStopLoad: false,
    adminUrl: "",
    video: false,
    upload: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setForceStopLoad: (state, action) => {
      state.forceStopLoad = action.payload;
    },
    setAdminUrl: (state, action) => {
      state.adminUrl = action.payload;
      state.upload=true
    },
    setVideo: (state, action) => {
      state.video = action.payload;
    },
  },
});

export const { setLoading, setForceStopLoad, setAdminUrl, setVideo } =
  ModelSlice.actions;

export default ModelSlice.reducer;

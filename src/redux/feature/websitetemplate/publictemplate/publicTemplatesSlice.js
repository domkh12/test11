import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPublicTemplates = createAsyncThunk(
  "publicTemplates/fetchPublicTemplates",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}templates/`
    );
    return response.data;
  }
);

const publicTemplatesSlice = createSlice({
  name: "publicTemplates",
  initialState: {
    templates: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublicTemplates.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPublicTemplates.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.templates = action.payload;
      })
      .addCase(fetchPublicTemplates.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default publicTemplatesSlice.reducer;

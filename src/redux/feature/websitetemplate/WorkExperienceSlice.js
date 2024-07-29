import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAccessToken } from "../../../lib/secureLocalStorage"; // Update the import path

export const fetchWorkExperiences = createAsyncThunk(
  "workExperiences/fetchWorkExperiences",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}work-experiences/`,
        {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (!error.response) {
        // Network error
        throw error;
      }
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

const workExperiencesSlice = createSlice({
  name: "workExperiences",
  initialState: {
    workExperiences: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkExperiences.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWorkExperiences.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.workExperiences = action.payload;
      })
      .addCase(fetchWorkExperiences.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default workExperiencesSlice.reducer;

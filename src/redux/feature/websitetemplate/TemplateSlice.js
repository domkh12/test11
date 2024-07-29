import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAccessToken } from "../../../lib/secureLocalStorage"; // Update the import path

export const fetchTemplates = createAsyncThunk(
  "templates/fetchTemplates",
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}templates/`,
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );
    return response.data;
  }
);

export const fetchTemplateData = createAsyncThunk(
  "templates/fetchTemplateData",
  async (templateId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}template-portfolios/${templateId}/`,
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

export const selectTemplate = createAsyncThunk(
  "templates/selectTemplate",
  async ({ userId, templateId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}select-templates/`,
        {
          user: userId,
          template: templateId,
        },
        {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        }
      );
      console.log(response.data)
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

const templatesSlice = createSlice({
  name: "templates",
  initialState: {
    templates: [],
    selectedTemplate: null,
    templateData: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTemplateData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTemplateData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.templateData = action.payload;
      })
      .addCase(fetchTemplateData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;        
      })
      .addCase(selectTemplate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(selectTemplate.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedTemplate = action.payload.template;
        console.log("action.payload.template", action.payload.template)
      })
      .addCase(selectTemplate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;        
      });
  },
});

export default templatesSlice.reducer;

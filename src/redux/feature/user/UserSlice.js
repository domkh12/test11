import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { storeAccessToken, getAccessToken, removeAccessToken } from "../../../lib/secureLocalStorage";

// Helper function to handle HTTP requests
const fetchWithAuth = async (url, options = {}) => {
  const accessToken = getAccessToken();
  if (!accessToken) throw new Error("No access token found");

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  return response.json();
};

// Async Thunks
export const fetchLogin = createAsyncThunk(
  "user/fetchLogin",
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        return rejectWithValue(errorText);
      }

      const data = await response.json();
      if (rememberMe) {
        localStorage.setItem("refresh", data.refresh);
        localStorage.setItem("user", JSON.stringify(data));
        storeAccessToken(data.access);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchWithAuth(`${import.meta.env.VITE_BASE_URL}profile/`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      const options = {
        method: "PUT",
        headers: profileData instanceof FormData ? {} : { "Content-Type": "application/json" },
        body: profileData instanceof FormData ? profileData : JSON.stringify(profileData),
      };
      const data = await fetchWithAuth(`${import.meta.env.VITE_BASE_URL}profile/`, options);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Initial State
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  profile: null,
  accessToken: getAccessToken() || null,
  refreshToken: localStorage.getItem("refresh") || null,
  status: "idle",
  error: null,
};

// Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("refresh");
      localStorage.removeItem("user");
      localStorage.removeItem("profile");
      localStorage.removeItem("selectedTemplate");
      removeAccessToken();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.error = null;
        storeAccessToken(action.payload.access);
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
        state.error = null;
        localStorage.setItem("profile", JSON.stringify(action.payload));
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      .addCase(updateProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
        state.error = null;
        localStorage.setItem("profile", JSON.stringify(action.payload));
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;

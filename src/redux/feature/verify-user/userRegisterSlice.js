import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const fetchRegister = createAsyncThunk(
  "user/fetchRegister",
  async ({ email, password, confirmPassword, username }) => {
    try {
      const body = JSON.stringify({
        email,
        password,
        confirmPassword,
        username,
      });
      console.log("Request payload:", body);

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}register/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        }
      );

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.log("Error response:", errorText);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success response:", data);
      return data;
    } catch (error) {
      console.error("Fetch error:", error.message);
      throw error;
    }
  }
);

const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to register";
      });
  },
});

export default userRegisterSlice.reducer;

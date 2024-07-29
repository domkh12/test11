import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVerified: false,
  isLoading: false,
  error: null,
};

export const verifyOtp = createAsyncThunk(
  "otp/verifyOtp",
  async ({ email, otp_code }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}verify-otp/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp_code }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error.message);
      throw error;
    }
  }
);

export const resendOtp = createAsyncThunk(
  "otp/resendOtp",
  async ({ email }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}resend-otp/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error.message);
      throw error;
    }
  }
);

const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.isLoading = false;
        state.isVerified = true;
        state.error = null;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to verify OTP";
      })
      .addCase(resendOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(resendOtp.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to resend OTP";
      });
  },
});

export default otpSlice.reducer;

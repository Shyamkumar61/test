// export default authSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authenticationApi } from "./api/authentication";
import Cookies from "js-cookie";

// export const refreshTokens = createAsyncThunk(
//   "auth/refreshTokens",
//   async (refreshToken, { rejectWithValue }) => {
//     try {
//       const response = await authenticationApi.endpoints.refreshTokens.mutation({
//         refresh: refreshToken
//       });
//       const { access: accessToken } = response.data;
//       localStorage.setItem("accessToken", accessToken);
//       return { accessToken, refreshToken };
//     } catch (error) {
//       // Handle error when refresh token is invalid/expired
//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("refreshToken");
//       return rejectWithValue(error.message);
//     }
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    isLoading: false,
    error: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      const { accessToken, refreshToken } = action.payload;

      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      // Clear cookies
      Cookies.remove("sessionid", { path: "/" });
      Cookies.remove("csrftoken", { path: "/" });
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(refreshTokens.pending, (state) => {
  //     // Set loading state
  //     state.isLoading = true;
  //     state.error = null;
  //   });
  //   builder.addCase(refreshTokens.fulfilled, (state, action) => {
  //     // Update state with new tokens
  //     const { accessToken, refreshToken } = action.payload;
  //     state.accessToken = accessToken;
  //     state.refreshToken = refreshToken;
  //     state.isLoading = false;
  //     state.error = null;
  //   });
  //   builder.addCase(refreshTokens.rejected, (state, action) => {
  //     // Handle error and reset state
  //     state.isLoading = false;
  //     state.error = action.payload;
  //     state.accessToken = null;
  //     state.refreshToken = null;
  //     localStorage.removeItem("accessToken");
  //     localStorage.removeItem("refreshToken");
  //   });
  // },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://35.154.83.23/api/" }),
  endpoints: (builder) => ({
    // for login of user
    loginUser: builder.mutation({
      query: ({ email, password }) => {
        return {
          url: "login/",
          method: "post",
          body: { email, password },
        };
      },
    }),
    // for register user
    registerUser: builder.mutation({
      // prettier-ignore
      query: ({email,phone_number,first_name,last_name,password,password2}) => {
            return {
                url: "register/",
                method: "post",
                // prettier-ignore
                body: {email,phone_number,first_name,last_name,password,password2}
            }
        },
    }),

    refreshTokens: builder.mutation({
      query: ({ refresh }) => {
        return {
          url: "refresh/token/",
          method: "post",
          body: { refresh },
        };
      },
    }),
    
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useRefreshTokensMutation,
} = authenticationApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { log } from "mathjs";

// Create the API using the base query and define endpoints
export const newEmployeeApi = createApi({
  reducerPath: "newEmployeeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://35.154.83.23/api/", // Update the base URL as needed
    prepareHeaders: (headers, { getState }) => {
      const { accessToken } = getState().auth;
      // console.log(localStorage.getItem("accessToken"));
      // If an access token is available, include it in the headers
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers; // Add this line to return the modified headers
    },
  }),
  endpoints: (builder) => ({
    addEmpDetail: builder.mutation({
      query: (employeeInfo) => ({
        url: "payroll/emp-ad/",
        method: "POST",
        body: employeeInfo,
      }),
    }),

    // addEmpSalary
    addEmpSalary: builder.mutation({
      query: ({
        basic,
        cl,
        company_name,
        da,
        el,
        employee,
        epfAmount,
        esiAmount,
        lwfAmount,
        nfh,
        nightDuty,
        other,
        professionalTax,
        washing,
      }) => {
        return {
          url: "payroll/tech-salary/add/",
          method: "post",
          body: {
            basic,
            cl,
            da,
            el,
            epfAmount,
            esiAmount,
            lwfAmount,
            nfh,
            nightDuty,
            other,
            professionalTax,
            washing,
            employee,
            company_name,
          },
        };
      },
    }),

    // addEmpAttendance
    addEmpAttendance: builder.mutation({
      query: ({ attendance, month, emp_id, night }) => {
        return {
          url: "payroll/salary/",
          method: "post",
          body: { attendance, month, emp_id, night },
        };
      },
    }),

    editEmpSalary: builder.mutation({
      query: ({
        basic,
        cl,
        company_name,
        da,
        el,
        employee,
        epfAmount,
        esiAmount,
        lwfAmount,
        nfh,
        nightDuty,
        other,
        professionalTax,
        washing,
      }) => {
        return {
          url: `payroll/tech-salary/${employee}/`,
          method: "put",
          body: {
            basic,
            cl,
            da,
            el,
            epfAmount,
            esiAmount,
            lwfAmount,
            nfh,
            nightDuty,
            other,
            professionalTax,
            washing,
            employee,
            company_name,
          },
        };
      },
    }),

    // generateSalarySlip
    generateSalarySlip: builder.mutation({
      query: (attendance) => ({
        url: "payroll/salary/",
        method: "post",
        body: { attendance },
      }),
    }),

    // getAllEmployeeList
    getAllEmployeeList: builder.query({
      query: () => "/payroll/emp/",
    }),

    // getEmployeeDetail
    getEmployeeDetail: builder.query({
      query: (id) => {
        return `/payroll/emp-detail/${id}/`;
      },
    }),
    logoutUser: builder.mutation({
      query: (refreshTokens) => {
        return {
          url: "logout/",
          method: "post",
          body: { refresh_token: refreshTokens },
        };
      },
    }),
  }),
});

// Extract the generated hooks for usage in components
export const {
  useAddEmpDetailMutation,
  useAddEmpSalaryMutation,
  useGenerateSalarySlipMutation,
  useAddEmpAttendanceMutation,
  useEditEmpSalaryMutation,
  useGetAllEmployeeListQuery,
  useGetEmployeeDetailQuery,
  useLogoutUserMutation,
} = newEmployeeApi;

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  subNavIndex: 0,
  navbarUrl: '',
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSubNavIndex: (state,action) => {
      state.subNavIndex = action.payload
    },
    setNavBarUrl: (state,action) => {
      state.navbarUrl = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSubNavIndex,setNavBarUrl } = dashboardSlice.actions

export default dashboardSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fields: [],
}

export const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    setFields: (state,action) => {
      state.fields = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFields } = globalSlice.actions

export default globalSlice.reducer
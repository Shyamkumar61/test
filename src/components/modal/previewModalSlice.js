import { createSlice } from '@reduxjs/toolkit';

const previewModalSlice = createSlice({
  name: 'previewModal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = previewModalSlice.actions;
export default previewModalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
  modalName: "",
  modalId: "",
  saveClick: false,
  inputvalue: "",
};
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
    setModalName: (state, action) => {
      state.modalName = action.payload;
    },
    setModalId: (state, action) => {
      state.modalId = action.payload;
    },
    setSaveClick: (state, action) => {
      state.saveClick = action.payload;
    },
    setInputValue: (state, action) => {
      state.inputvalue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setOpenModal,
  setModalName,
  setModalId,
  setSaveClick,
  setInputValue,
} = modalSlice.actions;
export const selectOpenModalState = (state) => state.modal.openModal;
export default modalSlice.reducer;

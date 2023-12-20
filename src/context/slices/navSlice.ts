import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
  },
});

export const { setOrigin } = navSlice.actions;
export const selectOrigin = (state: { nav: { origin: string } }) =>
  state.nav.origin;

export default navSlice.reducer;

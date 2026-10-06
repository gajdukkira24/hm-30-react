import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter(_state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;

export const selectFilter = (state) => state.filter;

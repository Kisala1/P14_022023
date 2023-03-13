import { createSlice } from '@reduxjs/toolkit';

const localStorageSlice = createSlice({
  name: 'data',
  initialState: {
    data: '',
  },
  reducers: {
    createLocalStorage: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { createLocalStorage } = localStorageSlice.actions;
export default localStorageSlice.reducer;

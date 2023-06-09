import { createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';

const initialState: State = {
  rectangles: [],
};

const rectangleSlice = createSlice({
  name: 'rectangle',
  initialState,
  reducers: {
    getRectangle: (state) => state,
    addRectangle: (state, action) => {
      state.rectangles.push(action.payload);
    },
    removeRectangle: (state) => {
      state.rectangles = state.rectangles.slice(0, -1);
    },
  },
});

export const { getRectangle, addRectangle, removeRectangle } =
  rectangleSlice.actions;
export default rectangleSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rectangleSlice from './features/rectangleSlice';


const store = configureStore({
  reducer: {
rectangleState:rectangleSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
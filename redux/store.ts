// filepath: /Users/yatingsu/Desktop/coding/react/weather_dress/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './slices/locationSlice';

const store = configureStore({
    reducer: {
        location: locationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
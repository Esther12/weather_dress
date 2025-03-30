import store from './store';

// Define the RootState type based on the store's state
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type based on the store's dispatch function
export type AppDispatch = typeof store.dispatch;
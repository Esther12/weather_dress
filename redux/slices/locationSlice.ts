import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocationState {
    zip: string;
}

const initialState: LocationState = {
    zip: '',
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setZip: (state, action: PayloadAction<string>) => {
            state.zip = action.payload;
            window.localStorage.setItem('myZip', action.payload);
        },
        clearZip: (state) => {
            state.zip = '';
            window.localStorage.setItem('myZip', '');
        },
    },
});

export const { setZip, clearZip } = locationSlice.actions;
export default locationSlice.reducer;
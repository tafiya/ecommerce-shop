import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeMode, ThemeState } from '@/types/theme';

const initialState: ThemeState = {
    mode: ThemeMode.LIGHT,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode =
                state.mode === ThemeMode.LIGHT
                    ? ThemeMode.DARK
                    : ThemeMode.LIGHT;
        },
        setTheme: (state, action: PayloadAction<ThemeMode>) => {
            state.mode = action.payload;
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
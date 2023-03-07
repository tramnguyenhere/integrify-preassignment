import { createSlice } from "@reduxjs/toolkit";

export interface ColorModeState {
    darkMode: boolean
}

const initialState: ColorModeState = {
   darkMode: false
}

export const colorModeSlice = createSlice({
    name: 'colorMode',
    initialState,
    reducers: {
        setToggleColorMode: (state, action) => {
            state.darkMode = action.payload
        }
    }
})

export const { setToggleColorMode } = colorModeSlice.actions
export default colorModeSlice.reducer
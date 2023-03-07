import { createSlice } from "@reduxjs/toolkit";
import { Country } from "../../types/types";

export interface CountryState {
    searchQueryResults: string,
    countries: Country[]
}

const initialState: CountryState = {
    countries: [],
    searchQueryResults: ''
}

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        setQueryResults: (state, action) => {
            state.searchQueryResults = action.payload
        }
    }
})

export const { setQueryResults } = countrySlice.actions
export default countrySlice.reducer
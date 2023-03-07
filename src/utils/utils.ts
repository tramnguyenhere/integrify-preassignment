import {  Country } from "../types/types";

export const sortedDataByAlphabet = (data: Country[] | null) => {
   return data?.sort((a: Country, b: Country) => {
        if (a.name.common < b.name.common) {
            return -1;
        } else if (a.name.common > b.name.common) {
            return 1;
        } else {
            return 0;
        }
    })
}
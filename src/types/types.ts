export interface Country {
    name: {
      common: string,
      official: string
    },
    independent: boolean,
    capital: string[],
    region: string,
    language: object,
    latlng: number[],
    flags: {
      png: string,
      svg: string,
      alt: string
    },
    population: number
}
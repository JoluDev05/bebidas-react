import {z} from 'zod';

export const CategoriesApiResponseSchema = z.object({
    drinks: z.array(z.object({
        strCategory: z.string()
    }))
})

export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})

export const DrinkAPIResponse = z.object({
    strDrink: z.string(),
    strInstructions: z.string(),
    strDrinkThumb: z.string()
})

export const DrinksAPIResponse = z.object({
    drinks: z.array(DrinkAPIResponse)
})
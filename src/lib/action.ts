'use server'

import type Meal from "@/types/Meal"
import { saveMeal } from "./mealsDbb"

export async function shareMeal(formData: FormData) {

    const meal: Partial<Meal> = {
        title: formData.get('title')?.toString() || '',
        summary: formData.get('summary')?.toString() || '',
        instructions: formData.get('instructions')?.toString() || '',
        image: formData.get('image') as File,
        creator: formData.get('name')?.toString() || '',
        creator_email: formData.get('email')?.toString() || '',
    }
    await saveMeal(meal as Meal)
}
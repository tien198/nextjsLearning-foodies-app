'use server'

import type Meal from "@/types/Meal"
import { saveMeal } from "./mealsDbb"
import { redirect } from "next/navigation"

function isInvalidText(text?: string) {
    return !text || text.trim() === ''
}

type ActionData = {
    message: string | null
}
export async function shareMeal(prevState: ActionData, formData: FormData): Promise<ActionData> {

    const meal: Partial<Meal> = {
        title: formData.get('title')?.toString() || '',
        summary: formData.get('summary')?.toString() || '',
        instructions: formData.get('instructions')?.toString() || '',
        image: formData.get('image') as File,
        creator: formData.get('name')?.toString() || '',
        creator_email: formData.get('email')?.toString() || '',
    }

    if (
        isInvalidText(meal.title)
        || isInvalidText(meal.summary)
        || isInvalidText(meal.instructions)
        || isInvalidText(meal.creator)
        || isInvalidText(meal.creator_email)
        || !meal.image
        || (meal.image as File).size === 0
    )
        // throw new Error('InvalidInput')
        return {
            message: 'invalid input'
        }

    await saveMeal(meal as Meal)
    redirect('/meals')
}
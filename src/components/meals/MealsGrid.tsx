import type Meal from "@/types/Meal"
import MealItem from "./MealItem"

type Props = {
    meals: Meal[]
}

export default function MealsGrid({ meals }: Props) {
    return (
        <ul>
            {meals.map(meal =>
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            )}
        </ul>
    )
}

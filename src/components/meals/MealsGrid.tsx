import type Meal from "@/types/Meal"
import MealItem from "./MealItem"
import styles from './MealsGrid.module.css'

type Props = {
    meals: Meal[]
}

export default function MealsGrid({ meals }: Props) {
    return (
        <ul className={styles['meals']}>
            {meals.map(meal =>
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            )}
        </ul>
    )
}

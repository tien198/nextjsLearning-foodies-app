import Link from 'next/link'
import styles from './page.module.css'
import MealsGrid from '@/components/meals/MealsGrid'
import { getMeals } from '../../../lib/mealsDbb'
import type Meal from '@/types/Meal'

export default async function Meals() {
    const meals = await getMeals() as Meal[]
    return (
        <>
            <header className={styles['header']}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={styles['highlight']}>by you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
                <p className={styles['cta']}>
                    <Link href='/meals/share'>
                        Share your favorite recipe
                    </Link>
                </p>
            </header>
            <main className={styles['main']}>
                <MealsGrid meals={meals} />
            </main>
        </>
    )
}
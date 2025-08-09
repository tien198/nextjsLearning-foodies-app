import Link from 'next/link'
import styles from './page.module.css'
import MealsGrid from '@/components/meals/MealsGrid'
import { getMeals } from '../../lib/mealsDbb'
import type Meal from '@/types/Meal'
import { Suspense } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Title',
    description: 'Summary page content in range 150 -160 words',
    robots: 'index, follow',
    openGraph: {
        title: 'title page',
        description: 'ảnh hưởng CTR, gián tiếp tác động SEO',
        images: [],
        url: 'this page url'
    }
}

async function Meals() {
    const meals = await getMeals() as Meal[]

    return <MealsGrid meals={meals} />
}

export default function MealsPage() {
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
                <Suspense fallback={<p className={styles['loading']}>Fetching meals ...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}
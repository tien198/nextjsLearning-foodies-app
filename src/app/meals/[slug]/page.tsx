import Image from 'next/image'
import styles from './page.module.css'
import { getMeal } from '../../../lib/mealsDbb'
import type Meal from '@/types/Meal'
import { notFound } from 'next/navigation'

type Props = {
    params: Promise<{ slug: string }>
}

export default async function Post({ params }: Props) {
    const { slug } = await params
    const meal = await getMeal(slug) as Meal

    if(!meal)
        notFound()
    meal.instructions = meal.instructions.replace(/\n/g, '<br/>')
    return <>
        <header className={styles['header']}>
            <div className={styles['image']}>
                <Image src={meal.image as string} alt={meal.title} fill />
            </div>
            <div className={styles['headerText']}>
                <h1>{meal.title}</h1>
                <p className={styles['creator']}>
                    by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                </p>
                <p className={styles['summary']}>{meal.summary}</p>
            </div>
        </header>
        <main>
            <p className={styles['instructions']}
                dangerouslySetInnerHTML={{
                    __html: meal.instructions
                }}></p>
        </main>
    </>
}
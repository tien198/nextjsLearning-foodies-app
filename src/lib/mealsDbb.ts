import type Meal from '@/types/Meal'

import fs from 'fs'
import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import { resolve } from 'path'

const db = sql('meals.db')

export async function getMeals(): Promise<Meal[]> {
    // await new Promise((resolve) => setTimeout(() => resolve(null), 2000))

    // throw new Error('Database connection failed')
    return db.prepare('SELECT * FROM meals').all() as Meal[]
}

export async function getMeal(slug: string): Promise<Meal> {
    return db.prepare('SELECT * FROM meals WHERE slug=?').get(slug) as Meal
}

export async function saveMeal(meal: Meal) {
    meal.slug = slugify(meal.title, { lower: true })
    meal.instructions = xss(meal.instructions)

    const extension = (meal.image as File).name.split('.').pop()
    const fileName = meal.slug + '.' + extension

    const imagePath = '/images/' + fileName
    const wStream = fs.createWriteStream('public' + imagePath)
    const buffer = await (meal.image as File).arrayBuffer()
    wStream.write(Buffer.from(buffer), error => {
        if (error)
            throw new Error('Saving image failed!')
    })

    meal.image = imagePath

    // await new Promise((resolve) => setTimeout(() => resolve(null), 2000))

    db.prepare(`
        INSERT INTO  meals 
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )`
    ).run(meal)
}
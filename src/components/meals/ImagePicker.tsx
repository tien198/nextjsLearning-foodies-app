'use client'

import Image from 'next/image'
import styles from './ImagePicker.module.css'
import { useRef, useState, type ChangeEvent } from 'react'

type Props = {
    label: string
    name: string
}

export default function ImagePicker({ label, name }: Props) {


    return (
        <div className={styles['picker']}>
            <label htmlFor={name}>{label}</label>
            <div className={styles['controls']}>
                <div className={styles['preview']}>

                </div>
                <input className={styles['input']} />
                <button type="button" className={styles['button']}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}
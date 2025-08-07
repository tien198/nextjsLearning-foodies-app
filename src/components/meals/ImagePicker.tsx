'use client'

import { useRef, useState, type ChangeEvent } from 'react'
import styles from './ImagePicker.module.css'
import Image from 'next/image'

type Props = {
    label: string
    name: string
}

export default function ImagePicker({ label, name }: Props) {

    const imageInput = useRef<HTMLInputElement>(null)
    const [image, setImage] = useState<string | null>(null)

    const handlePickImage = () => imageInput.current!.click()

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()
        const file = e.target.files![0]
        if (!file)
            return
        reader.onload = (e) => setImage(String(e.target?.result))
        reader.readAsDataURL(file)
    }
    return (
        <div className={styles['picker']}>
            <label htmlFor={name}>{label}</label>
            <div className={styles['controls']}>
                <div className={styles['preview']}>
                    {image && <Image src={image} alt='Picked image' fill />}
                </div>
                <input
                    className={styles['input']}
                    type='file'
                    accept='image/png, image/jpeg'
                    id={name}
                    name={name}
                    ref={imageInput}
                    onChange={handleChangeImage}
                    required
                />
                <button type="button" className={styles['button']} onClick={handlePickImage}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}
'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './NavLink.module.css'
import type { PropsWithChildren } from "react";

type Props = {
    href: string
} & PropsWithChildren

export default function NavLink({ href, children }: Props) {
    const path = usePathname()
    return (
        <Link
            href={href}
            className={
                path.startsWith(href)
                    ? `${styles['link']} ${styles['active']}`
                    : styles['link']}
        >
            {children}
        </Link>
    )
}
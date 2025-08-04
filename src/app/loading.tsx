import styles from './loading.module.css'

export default function MealsLoadingPage() {
    return (
        <div className={styles['loading']}>
            <p>Fetching meals ...</p>
        </div>
    )
}
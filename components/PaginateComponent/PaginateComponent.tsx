import styles from "./PaginateComponent.module.scss"
export default function PaginateComponent() {
    return (
        <section className={styles["container-pagination"]}>
            <p className={`${styles["btn"]} card`}> Prev </p>
            <p className={`${styles["btn"]} card`}> Next </p>
        </section>
    )
}
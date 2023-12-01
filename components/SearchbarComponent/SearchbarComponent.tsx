import styles from "./SearchbarComponent.module.scss"
export default function SearchBarComponent() {
    return (
        <section className={styles["container-searchbar"]}>
            <input
                className={`${styles["field"]} card`}
                placeholder="Buscar imagenes.."
            />
        </section>
    )
}
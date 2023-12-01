import styles from "./PhotosSkeletonComponent.module.scss"
export default function PhotosSkeletonComponent() {
    return (
        <div className={styles["container-all-cards-skeleton"]}>
            {Array.from({ length: 12 }).map((_, index: number) => {
                return (
                    <div key={index} className={styles["container-outer-skeleton"]}>
                    </div>
                )
            })}
        </div>
    )
}
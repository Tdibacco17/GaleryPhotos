import { fetchGetPhotosByQuery } from "@/lib/data"
import { PhotoInterface } from "@/types"
import Image from "next/image"
import styles from "./PhotosComponent.module.scss"

export default async function PhotosComponent() {
    const data = await fetchGetPhotosByQuery({
        query: "nature",
        // page: 13,
        // per_page: 12
    })

    return (
        <div className={styles["container-all-imgs"]}>
            {data.photos.map((imgData: PhotoInterface) => {
                return (
                    <div key={imgData.id} className={styles["container-outer-img"]}>
                        <Image
                            src={imgData.src.original}
                            alt={imgData.alt}
                            fill
                            className={styles["container-inner-img"]}
                        />
                        <div className={styles["text"]}>
                            <small>{imgData.alt}</small>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
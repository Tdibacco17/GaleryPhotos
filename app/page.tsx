import { Suspense } from "react"
import styles from "./page.module.scss"
import PhotosComponent from "@/components/PhotosComponent/PhotosComponent"
import PhotosSkeletonComponent from "@/components/PhotosSkeletonComponent/PhotosSkeletonComponent"

export default function Home() {
  return (
    <div className={styles["container-home-page"]}>
      <div className={styles["wrapper-column"]}>
        <div className={styles["header"]}>
          <h1 className={styles["title"]}>Galery Photos</h1>
          <small className={styles["subtitle"]}>api server side</small>
        </div>
        <Suspense fallback={<PhotosSkeletonComponent />}>
          <PhotosComponent />
        </Suspense>
      </div>
    </div>
  )
}

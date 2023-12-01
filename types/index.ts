export interface GaleryPhotosDataContextInterface {
    handleGaleryPhotos: Function,
    galeryPhotosData: GaleryPhotosDataInterface;
}

export interface GaleryPhotosDataInterface {
    total_results: number;
    page: number;
    per_page: number;
    photos: PhotoInterface[];
    next_page?: string;
    prev_page?: string;
}

export interface PhotoInterface {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    avg_color: string;
    src: {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
    };
    liked: boolean;
    alt: string;
}
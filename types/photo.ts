export interface IPhoto {
    "albumId": number;
    "id": number;
    "title": string;
    "url": string;
    "thumbnailUrl": string;
}
export interface IPhotoListResponse {
    photos: IPhoto[];
    totalCount: number;
}

export interface IPhotoState {
    photos: IPhoto[];
    totalCount: number;
    error: string;
}

export enum PhotoActionTypes {
    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR'
}

export interface IFetchPhotosAction {
    type: PhotoActionTypes.FETCH_PHOTOS;
    payload: IPhotoListResponse;
}

export interface IFetchPhotosErrorAction {
    type: PhotoActionTypes.FETCH_PHOTOS_ERROR;
    payload: string;
}

export type PhotoAction = IFetchPhotosAction | IFetchPhotosErrorAction;

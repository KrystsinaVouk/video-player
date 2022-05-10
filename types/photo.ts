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
    fetching: boolean;
    currentPage: number;
}

export enum PhotoActionTypes {
    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',

    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_FETCHING = "SET_FETCHING"
}

export interface IFetchPhotosAction {
    type: PhotoActionTypes.FETCH_PHOTOS;
    payload: IPhotoListResponse;
}

export interface IFetchPhotosErrorAction {
    type: PhotoActionTypes.FETCH_PHOTOS_ERROR;
    payload: string;
}

interface setCurrentPage {
    type: PhotoActionTypes.SET_CURRENT_PAGE;
}

interface setFetching {
    type: PhotoActionTypes.SET_FETCHING,
    payload: boolean
}

export type PhotoAction =
    IFetchPhotosAction
    | IFetchPhotosErrorAction
    | setCurrentPage
    | setFetching;

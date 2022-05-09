import {IPhotoState, PhotoAction, PhotoActionTypes} from "../../types/photo";

const initialState: IPhotoState = {
    photos: [],
    totalCount: 1,
    error: ''
}

export const photoReducer = (state= initialState, action: PhotoAction): IPhotoState => {
    switch (action.type) {
        case PhotoActionTypes.FETCH_PHOTOS:
            return {
                ...state,
                totalCount: action.payload.totalCount,
                photos: [...state.photos, ...action.payload.photos]
            }
        case PhotoActionTypes.FETCH_PHOTOS_ERROR:
            return {...state, error: action.payload}
        default:
            return state;
    }
}

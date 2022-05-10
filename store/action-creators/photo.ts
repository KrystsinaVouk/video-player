import {Dispatch} from "react";
import axios from "axios";
import {PhotoAction, PhotoActionTypes} from "../../types/photo";

export const fetchPhotos = (page: number, limit: number) => {
    return async (dispatch: Dispatch<PhotoAction>) => {
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/photos`,
                {
                    params: {
                        _limit: limit,
                        _page: page
                    }
                }
            )

            dispatch({
                type: PhotoActionTypes.FETCH_PHOTOS,
                payload: {
                    photos: response.data,
                    totalCount: Number(response.headers['x-total-count'])
                }
            })

        } catch (error) {
            dispatch({
                type: PhotoActionTypes.FETCH_PHOTOS_ERROR,
                payload: 'Error during fetching the photos...'
            })
        }
    }
}

export const setCurrentPage = (): PhotoAction => {
    return {type:PhotoActionTypes.SET_CURRENT_PAGE}
}

export const setFetching = (payload: boolean): PhotoAction => {
    return {type:PhotoActionTypes.SET_FETCHING, payload}
}

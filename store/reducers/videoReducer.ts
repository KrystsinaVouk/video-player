import {IVideoState, VideoAction, VideoActionTypes} from "../../types/video";

const initialState: IVideoState = {
    videos: {},
    error: ''
}

export const videoReducer = (state= initialState, action: VideoAction): IVideoState => {
    switch (action.type) {
        case VideoActionTypes.FETCH_VIDEOS:
            return {
                videos: { ...state.videos,
                    [action.payload.listId]: action.payload.data
                },
                error: ''
            }
        case VideoActionTypes.FETCH_VIDEOS_ERROR:
            return {...state, error: action.payload}
        default:
            return state;
    }
}

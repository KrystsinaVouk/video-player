import {IVideoState, VideoAction, VideoActionTypes} from "../../types/video";

const initialState: IVideoState = {
    videos: {
        firstList:[],
        secondList:[]
    },
    error: ''
}

export const videoReducer = (state= initialState, action: VideoAction): IVideoState => {
    switch (action.type) {
        case VideoActionTypes.FETCH_VIDEOS_1:
            return {
                videos: {firstList: action.payload, secondList: state.videos.secondList},
                error: ''
            }
        case VideoActionTypes.FETCH_VIDEOS_2:
            return {
                videos: {firstList: state.videos.firstList, secondList: action.payload},
                error: ''
            }
        case VideoActionTypes.FETCH_VIDEOS_ERROR:
            return {...state, error: action.payload}
        default:
            return state;
    }
}

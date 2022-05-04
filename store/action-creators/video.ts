import {VideoAction, VideoActionTypes} from "../../types/video";
import {Dispatch} from "react";
import axios from "axios";

const getMediaListBody = (mediaListId: number) => ({
    MediaListId: mediaListId,
    IncludeCategories: false,
    IncludeImages: true,
    IncludeMedia: false,
    PageNumber: 1,
    PageSize: 20
});

const getMediaPlayInfoBody = () => ({
    MediaId: 15,
    StreamType: "TRIAL"
})

export const fetchVideos = (mediaListId: number, token: string) => {
    return async (dispatch: Dispatch<VideoAction>) => {
        try {
            const response = await axios.post(
                'https://thebetter.bsgroup.eu/Media/GetMediaList',
                getMediaListBody(mediaListId),
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": 'application/json'
                    }
                })

            dispatch({
                type: mediaListId === 2 ? VideoActionTypes.FETCH_VIDEOS_1 : VideoActionTypes.FETCH_VIDEOS_2,
                payload: response.data.Entities
            })

        } catch (error) {
            dispatch({
                type: VideoActionTypes.FETCH_VIDEOS_ERROR,
                payload: "The error has been occurred during the loading videos..."
            })
        }
    }
}

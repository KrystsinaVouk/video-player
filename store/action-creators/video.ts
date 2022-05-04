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

export const fetchVideos = (listId: number, token: string) => {
    return async (dispatch: Dispatch<VideoAction>) => {
        try {
            const response = await axios.post(
                'https://thebetter.bsgroup.eu/Media/GetMediaList',
                getMediaListBody(listId),
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": 'application/json'
                    }
                })

            dispatch({
                type: VideoActionTypes.FETCH_VIDEOS,
                payload: {data: response.data.Entities, listId: listId}
            })

        } catch (error) {
            dispatch({
                type: VideoActionTypes.FETCH_VIDEOS_ERROR,
                payload: "The error has been occurred during the loading videos..."
            })
        }
    }
}

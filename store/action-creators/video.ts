import {Dispatch} from "react";
import {IVideoListRequest, IVideoListResponse, VideoAction, VideoActionTypes} from "../../types/video";
import {http} from "../../config/http";
import {endpoints} from "../../enums/endpoints";
import {errorMessage} from "../../enums/errorMessages";

const getMediaListBody = (mediaListId: number) : IVideoListRequest => ({
    MediaListId: mediaListId,
    IncludeCategories: false,
    IncludeImages: true,
    IncludeMedia: false,
    PageNumber: 1,
    PageSize: 20
});

export const fetchVideos = (listId: number) => {
    return async (dispatch: Dispatch<VideoAction>) => {
        try {
            const { data } = await http.post<IVideoListRequest, IVideoListResponse>(
                endpoints.GET_MEDIA_LIST,
                getMediaListBody(listId)
            )

            dispatch({
                type: VideoActionTypes.FETCH_VIDEOS,
                payload: {data: data.Entities, listId: listId}
            })

        } catch (error) {
            dispatch({
                type: VideoActionTypes.FETCH_VIDEOS_ERROR,
                payload: errorMessage.FETCH_MEDIA_LIST
            })
        }
    }
}

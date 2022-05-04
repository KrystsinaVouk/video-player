export interface IVideoMediaContent {
    Id: number;
    Guid: string;
    MediaTypeCode: string;
    MediaTypeDisplayName: string;
    MediaAgeRestrictionValueMin: number;
    MediaAgeRestrictionImageUrl: string;
    Title: string;
    Description: string;
    Year: number;
    Duration: number;
    IsTrialContentAvailable: boolean;
    AvailableFrom: string;
    Images: IImage[];
    Products: IProduct[];
}

export interface IVideo {
    MediaId: number;
    Title: string;
    Description: string;
    MediaTypeCode: string;
    MediaTypeDisplayName: string;
    StreamId: number;
    Provider: string;
    ContentUrl: string;
}

export interface IImage {
    Id: number;
    MediaId: number;
    PlatformCode: string;
    ImageTypeCode: string;
    Url: string;
    Width: number;
    Height: number;
}

interface IProduct {
    Id: number;
}

export interface IVideoState {
    videos: {
        [key: number]: IVideoMediaContent[]
    },
    error: string
}
export enum VideoActionTypes {
    FETCH_VIDEOS = 'FETCH_VIDEOS',
    FETCH_VIDEOS_ERROR = 'FETCH_VIDEOS_ERROR'
}

interface IFetchVideosAction {
    type: VideoActionTypes.FETCH_VIDEOS,
    payload: {
        data: IVideoMediaContent[],
        listId: number
    }
}

interface IFetchVideosErrorAction {
    type: VideoActionTypes.FETCH_VIDEOS_ERROR,
    payload: string
}

export type VideoAction = IFetchVideosAction | IFetchVideosErrorAction;

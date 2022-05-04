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
        firstList: IVideoMediaContent[],
        secondList: IVideoMediaContent[]
    },
    error: string
}
export enum VideoActionTypes {
    FETCH_VIDEOS_1 = 'FETCH_VIDEOS_1',
    FETCH_VIDEOS_2 = 'FETCH_VIDEOS_2',
    FETCH_VIDEOS_ERROR = 'FETCH_VIDEOS_ERROR'
}

interface IFetchVideosAction_1 {
    type: VideoActionTypes.FETCH_VIDEOS_1,
    payload: IVideoMediaContent[]
}
interface IFetchVideosAction_2 {
    type: VideoActionTypes.FETCH_VIDEOS_2,
    payload: IVideoMediaContent[]
}

interface IFetchVideosErrorAction {
    type: VideoActionTypes.FETCH_VIDEOS_ERROR,
    payload: string
}

export type VideoAction = IFetchVideosAction_1 | IFetchVideosAction_2 | IFetchVideosErrorAction;

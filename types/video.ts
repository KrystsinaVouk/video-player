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
export interface IVideoListRequest {
    MediaListId: number;
    IncludeCategories: boolean;
    IncludeImages: boolean;
    IncludeMedia: boolean;
    PageNumber: number;
    PageSize: number;
}
export interface IVideoListResponse {
    data: {
        Entities: IVideoMediaContent[];
        PageNumber: number;
        PageSize: number;
        SourceType: string;
        TotalCount: number;
    }
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

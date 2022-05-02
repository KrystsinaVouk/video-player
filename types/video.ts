export interface IVideoMediaCOntent {
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

interface IImage {
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

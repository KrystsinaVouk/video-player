interface IUser {
    Id: number;
    UserName: string;
    FullName: string;
    ClientRoles: [];
}
interface IToken {
    Token: string;
    TokenExpires: string;
    RefreshToken: string;
}

export type User = {
    User: IUser,
    AuthorizationToken: IToken
}


export interface IUserState {
    user: User
    error: string
}

export enum UserActionTypes {
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    REMOVE_USER = 'REMOVE_USER'
}

export interface IUserRequestBody {
    Username: string;
    Password: string;
    Device: IDevice;
}
export interface IUserResponse {
    data: User
}

interface IDevice {
    PlatformCode: string;
    Name: string;
}

interface IFetchUserAction {
    type: UserActionTypes.FETCH_USER,
    payload: User
}
interface IFetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR,
    payload: string
}

interface IRemoveUserAction {
    type: UserActionTypes.REMOVE_USER
}

export type UserAction = IFetchUserAction | IFetchUserErrorAction | IRemoveUserAction;

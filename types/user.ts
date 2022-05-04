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
    FETCH_USER_ERROR = 'FETCH_USER_ERROR'
}

export interface IUserBody {
    Username: string;
    Password: string;
    Device: IDevice;
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

export type UserAction = IFetchUserAction | IFetchUserErrorAction;

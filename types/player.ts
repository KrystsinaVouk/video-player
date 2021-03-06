import {IVideoMediaContent} from "./video";

export interface IPlayerInfo {
  MediaId: number;
  Title: string;
  Description: string;
  MediaTypeCode: string;
  MediaTypeDisplayName: string;
  StreamId: number;
  Provider: string;
  ContentUrl: string;
}

export interface PlayerState {
  playerInfo: null | IPlayerInfo;
  active: null | IVideoMediaContent;
  error: string;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
  isfullScreen: boolean;
}

export enum PlayerActionTypes {
  FETCH_PLAYER_INFO = 'FETCH_PLAYER_INFO',
  FETCH_PLAYER_INFO_ERROR = 'FETCH_PLAYER_INFO_ERROR',

  PLAY = "PLAY",
  PAUSE = "PAUSE",
  ENTER_FULLSCREEN = "ENTER_FULLSCREEN",
  EXIT_FULLSCREEN = "EXIT_FULLSCREEN",
  SET_ACTIVE = "SET_ACTIVE",
  SET_DURATION = "SET_DURATION",
  SET_CURRENT_TIME = "SET_CURRENT_TIME",
  SET_VOLUME = "SET_VOLUME",
}

interface PlayAction {
  type: PlayerActionTypes.PLAY;
}

interface PauseAction {
  type: PlayerActionTypes.PAUSE;
}
interface EnterFullScreenAction {
  type: PlayerActionTypes.ENTER_FULLSCREEN;
}

interface ExitFullScreenAction {
  type: PlayerActionTypes.EXIT_FULLSCREEN;
}

interface SetActiveAction {
  type: PlayerActionTypes.SET_ACTIVE;
  payload: IVideoMediaContent;
}

interface SetDurationAction {
  type: PlayerActionTypes.SET_DURATION;
  payload: number;
}

interface SetVolumeAction {
  type: PlayerActionTypes.SET_VOLUME;
  payload: number;
}

interface SetCurrentTimeAction {
  type: PlayerActionTypes.SET_CURRENT_TIME;
  payload: number;
}


interface IFetchPlayerInfoAction {
  type: PlayerActionTypes.FETCH_PLAYER_INFO,
  payload: IPlayerInfo
}

interface IFetchPlayerInfoErrorAction {
  type: PlayerActionTypes.FETCH_PLAYER_INFO_ERROR,
  payload: string
}

export interface IPlayerRequestBody {
  MediaId: number;
  StreamType: string;
}

export interface IPlayerResponse {
  data: IPlayerInfo
}

export type PlayerAction =
  | IFetchPlayerInfoAction
  | IFetchPlayerInfoErrorAction

  | PlayAction
  | PauseAction
  | EnterFullScreenAction
  | ExitFullScreenAction
  | SetActiveAction
  | SetDurationAction
  | SetVolumeAction
  | SetCurrentTimeAction;

import { PlayerAction, PlayerActionTypes } from "../../types/player";
import {IVideoMediaContent} from "../../types/video";

export const playVideo = (): PlayerAction => {
  return { type: PlayerActionTypes.PLAY };
};
export const pauseVideo = (): PlayerAction => {
  return { type: PlayerActionTypes.PAUSE };
};
export const setActive = (payload: IVideoMediaContent): PlayerAction => {
  return { type: PlayerActionTypes.SET_ACTIVE, payload };
};
export const setCurrentTime = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_CURRENT_TIME, payload };
};
export const setVolume = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_VOLUME, payload };
};
export const setDuration = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_DURATION, payload };
};

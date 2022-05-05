import {Dispatch} from "react";
import {IPlayerRequestBody, IPlayerResponse, PlayerAction, PlayerActionTypes} from "../../types/player";
import {IVideoMediaContent} from "../../types/video";
import {http} from "../../config/http";
import {endpoints} from "../../config/endpoints";
import {errorMessage} from "../../config/errorMessages";


export const fetchPlayerInfo = (mediaId: number, streamType: string) => {
  return async (dispatch: Dispatch<PlayerAction>) => {
    try {
      const { data } = await http.post<IPlayerRequestBody, IPlayerResponse>(
          endpoints.GET_PLAYER_INFO,
          {
              MediaId: mediaId,
              StreamType: streamType
          })

      dispatch({
        type: PlayerActionTypes.FETCH_PLAYER_INFO,
        payload: data
      })

    } catch (error) {
      dispatch({
        type: PlayerActionTypes.FETCH_PLAYER_INFO_ERROR,
        payload: errorMessage.FETCH_PLAYER
      })
    }
  }
}


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

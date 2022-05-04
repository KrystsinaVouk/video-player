import {Dispatch} from "react";
import axios from "axios";
import {IPlayerInfo, PlayerAction, PlayerActionTypes} from "../../types/player";


export const fetchPlayerInfo = (mediaId: number, streamType: string, token) => {
  return async (dispatch: Dispatch<PlayerAction>) => {
    try {
      const response = await axios.post(
          'https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo',
          {
              MediaId: 15,
              StreamType: "TRIAL"
          },
          {
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": 'application/json'
            }
          })

        console.log(response.data)

      dispatch({
        type: PlayerActionTypes.FETCH_PLAYER_INFO,
        payload: response.data
      })

    } catch (error) {
      dispatch({
        type: PlayerActionTypes.FETCH_PLAYER_INFO_ERROR,
        payload: "The error has been occurred during the fetching player information..."
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
export const setActive = (payload: IPlayerInfo): PlayerAction => {
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

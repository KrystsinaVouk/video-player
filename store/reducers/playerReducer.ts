import {PlayerAction, PlayerActionTypes, PlayerState,} from "../../types/player";

const initialState: PlayerState = {
  currentTime: 0,
  duration: 0,
  active: null,
  playerInfo: null,
  error: '',
  pause: true,
  volume: 50,
};

export const playerReducer = (
  state = initialState,
  action: PlayerAction
): PlayerState => {
  switch (action.type) {
    case PlayerActionTypes.FETCH_PLAYER_INFO:
      return {...state, playerInfo: action.payload}
    case PlayerActionTypes.FETCH_PLAYER_INFO_ERROR:
      return {...state, error: action.payload}
    case PlayerActionTypes.PLAY:
      return { ...state, pause: false };
    case PlayerActionTypes.PAUSE:
      return { ...state, pause: true };
    case PlayerActionTypes.SET_ACTIVE:
      return { ...state, active: action.payload, duration: 0, currentTime: 0 };
    case PlayerActionTypes.SET_DURATION:
      return { ...state, duration: action.payload };
    case PlayerActionTypes.SET_VOLUME:
      return { ...state, volume: action.payload };
    case PlayerActionTypes.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    default:
      return state;
  }
};

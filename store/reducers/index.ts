import {combineReducers} from "redux";
import {playerReducer} from "./playerReducer";
import {HYDRATE} from "next-redux-wrapper";
import {videoReducer} from "./videoReducer";
import {userReducer} from "./userReducer";

const rootReducer = combineReducers({
    player: playerReducer,
    video: videoReducer,
    user: userReducer
})

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        if (state.count) nextState.count = state.count; // preserve count value on client side navigation
        return nextState;
    } else {
        return rootReducer(state, action);
    }
};

export type RootState = ReturnType<typeof rootReducer>;

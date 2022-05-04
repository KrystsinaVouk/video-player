import * as PlayerActionCreators from "../action-creators/player"
import * as UserActionCreators from "../action-creators/user"
import * as VideoActionCreators from "../action-creators/video"

export default {
    ...PlayerActionCreators,
    ...UserActionCreators,
    ...VideoActionCreators
}

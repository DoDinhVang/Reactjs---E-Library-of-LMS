import { ProfileAction } from "../action/profileAction"
import { ProfileType } from "../type/ProfileType"

const initialState = {
    disabled: true
}
const profileReducer = (state = initialState, action: ProfileAction) => {

    const { type, payload } = action
    switch (type) {

        case ProfileType.SET_DISIBLED_ATTRIBUTE:
            return { ...state, disabled: payload }

        default:
            return { ...state }
    }
}

export default profileReducer

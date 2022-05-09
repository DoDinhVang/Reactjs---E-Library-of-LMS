import { ProfileType } from "../type/ProfileType"

export const setDisibleAttributeActionCreator = (isVisible:boolean)=>{
    return{
        type: ProfileType.SET_DISIBLED_ATTRIBUTE,
        payload: isVisible
    }
}


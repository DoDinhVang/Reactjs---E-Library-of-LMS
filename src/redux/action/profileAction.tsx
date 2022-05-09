
import {ProfileType} from '../type/ProfileType';

interface setDisibledAttribute{
    type: ProfileType.SET_DISIBLED_ATTRIBUTE,
    payload: boolean
}

export type ProfileAction = setDisibledAttribute
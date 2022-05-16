
import { ModalType } from "../type/ModalType";

interface setVisibleModal{
        type: ModalType.VISIBLE_MODAL,
        payLoad: boolean

}

export type ModalAction = setVisibleModal;
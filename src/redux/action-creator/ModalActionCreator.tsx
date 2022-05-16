import { ModalType } from "../type/ModalType";

export const setVisibleModalActionCreator = (isVisible: boolean)=>{
   
    return {
        type: ModalType.VISIBLE_MODAL,
        payLoad: isVisible
    }
}
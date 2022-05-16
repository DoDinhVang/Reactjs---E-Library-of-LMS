import { ModalType } from "../type/ModalType"
import { ModalAction } from "../action/ModalAction"


const initialState = {
    isVisible: false
}


const ModalReducer = (state = initialState, action : ModalAction)=>{
    const {type,payLoad} = action;
  
        
        switch (type) {
            case ModalType.VISIBLE_MODAL:
            return {...state,isVisible: payLoad}
        
            default:
                return {...state}
        }
}
export default ModalReducer;



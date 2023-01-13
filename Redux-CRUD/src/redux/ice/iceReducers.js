import { BUY_ICE } from "./iceType";

const initialState={
    numOfIceCreams:30
}

const iceReducer=(state=initialState,action)=>{
    switch (action.type) {
        case BUY_ICE:
        return{
            ...state,
            numOfIceCreams:state.numOfIceCreams-5
        };
        default:return state;
    }
}
export default iceReducer;
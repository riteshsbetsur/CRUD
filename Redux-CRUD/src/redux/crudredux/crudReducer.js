import { ADD_USER, DELETE_USER, GET_SINGLE_USER, GET_USERS, UPDATE_USER } from "./crudActionType";

const initialState={
    loading:false,
    users:[],
    user:{},
}

const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users:action.payload,
                loading:false
            };
            case DELETE_USER:
            case ADD_USER:
            case UPDATE_USER:
            return{
                ...state,
                loading:false
            };
           case GET_SINGLE_USER:
           return{
            ...state,
            user:action.payload,
            loading:false
           }
    
        default: return state
    }
}
export default userReducer;
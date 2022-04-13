import { SET_USER } from "./actionType";


const reducer = (state, action) =>{
    if(action.type === SET_USER ){
        return {
            ...state,
            user: action.payload.displayName,
            image: action.payload.photoURL,
        }
    }
    return state
};
export default reducer;
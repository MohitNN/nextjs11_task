import { storeLoggedInUser } from "../../services/StorageService"
import { GET_USER, USER_LOGIN } from "../actions/EventAction"

let initialstate = {
   user:{}
}

const EventReducer = function(state=initialstate,action){
    switch (action.type) {
        case USER_LOGIN:{
            localStorage.setItem('loggedIn-user',JSON.stringify(action.payload));
        }
        case GET_USER:{
            return{...state,
                 user:action.payload,
            }
        }
        default:
            return state
    }
}

export default EventReducer
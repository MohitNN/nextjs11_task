import { storeLoggedInUser } from "../../services/StorageService"
import { GET_EVENTS, GET_USER, STORE_USERS, USER_LOGIN } from "../actions/EventAction"

let initialstate = {
   user:{},
   events:[]
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
        case STORE_USERS:{
            localStorage.setItem("add-users", JSON.stringify(action.payload));
        }
        case GET_EVENTS:{
            return {...state,events:[...action.payload]}
        }
        // case STORE_EVENTS:{
        //     localStorage.setItem('events',JSON.stringify(action.payload))
        // }
        default:
            return state
    }
}
export default EventReducer
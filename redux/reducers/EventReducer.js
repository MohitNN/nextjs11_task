import { removeData, storeData } from "../../services/StorageService"
import { GET_USERS, GET_USER_LOGIN, STORE_USERS, USER_LOGIN ,GET_EVENTS, DELETE_USERS, UPDATE_USERS, DELETE_EVENT, UPDATE_EVENT, USER_LOGOUT} from "../actions/EventAction"

let initialstate = {
   user:{},
   users:[],
}

const EventReducer = function(state=initialstate,action){
    switch (action.type) {
        case USER_LOGIN:{
            storeData('loggedIn-user',action.payload)
        }
        case GET_USER_LOGIN:{
            return{...state,
                 user:action.payload,
            }
        }
        case STORE_USERS:{
            storeData("add-users",action.payload)
        }
        case GET_USERS:{
            return{...state,
                users:action.payload,
            }
        }
        case UPDATE_USERS:{
            storeData("add-users",action.payload)
        }
        case GET_EVENTS:{
            return {...state,events:(action.payload)}
        }
        case DELETE_USERS:{
            storeData("add-users",action.payload)
        }
        case DELETE_EVENT:{
            storeData("events",action.payload)
        }
        case UPDATE_EVENT:{
            storeData("events",action.payload)
        }
        default:
            return state
    }
}
export default EventReducer
import { GET_USERS, GET_USER_LOGIN, STORE_USERS, USER_LOGIN ,GET_EVENTS, DELETE_USERS, UPDATE_USERS, DELETE_EVENT, UPDATE_EVENT} from "../actions/EventAction"

let initialstate = {
   user:{},
   users:[],
}

const EventReducer = function(state=initialstate,action){
    switch (action.type) {
        case USER_LOGIN:{
            localStorage.setItem('loggedIn-user',JSON.stringify(action.payload));
        }
        case GET_USER_LOGIN:{
            return{...state,
                 user:action.payload,
            }
        }
        case STORE_USERS:{
            localStorage.setItem("add-users", JSON.stringify(action.payload));
        }
        case GET_USERS:{
            return{...state,
                users:action.payload,
            }
        }
        case UPDATE_USERS:{
            localStorage.setItem("add-users", JSON.stringify(action.payload));
        }
        case GET_EVENTS:{
            return {...state,events:(action.payload)}
        }
        case DELETE_USERS:{
            localStorage.setItem("add-users", JSON.stringify(action.payload));
        }
        case DELETE_EVENT:{
            localStorage.setItem("events", JSON.stringify(action.payload));
        }
        case UPDATE_EVENT:{
            localStorage.setItem("events", JSON.stringify(action.payload));
        }
        default:
            return state
    }
}
export default EventReducer
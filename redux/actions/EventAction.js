import { storeData } from "../../services/StorageService"

export const USER_LOGIN = "USER_LOGIN"
export const GET_USER_LOGIN = "GET_USER_LOGIN"
export const STORE_USERS = "STORE_USERS"
export const GET_USERS = "GET_USERS"
export const GET_EVENTS = "GET_EVENTS"
export const DELETE_EVENT = "DELETE_EVENT"
export const UPDATE_USERS = "UPDATE_USERS"
export const UPDATE_EVENT = "UPDATE_EVENT"
export const DELETE_USERS = "DELETE_USERS"

export const userLogin = (obj, setLoading, router) => (dispatch) => {
    dispatch({
        type: USER_LOGIN,
        payload: obj
    })
    setLoading(false);
    router.push("/")
}
export const getUserLogin = () => (dispatch) => {
    const obj = localStorage.getItem('loggedIn-user');
    dispatch({
        type: GET_USER_LOGIN,
        payload: obj
    })
}

export const storeUsers = (obj) => (dispatch) => {
    var add = [];
    add = JSON.parse(localStorage.getItem('add-users')) || [];
    add.push(obj);
    dispatch({
        type: STORE_USERS,
        payload: add
    })
}

export const getUsers = () => (dispatch) => {
    const obj = JSON.parse(localStorage.getItem('add-users'));
    dispatch({
        type: GET_USERS,
        payload: obj
    })
}
export const deleteUsers = (obj) => (dispatch) => {
    const getUser = JSON.parse(localStorage.getItem('add-users'));
    const filter_user = getUser.filter(item => item.id !== obj.id);
    dispatch({
        type: DELETE_USERS,
        payload: filter_user
    })
    dispatch(getUsers())
}

export const updateUsers = (obj) => (dispatch) => {
    let getUser = JSON.parse(localStorage.getItem('add-users'));
    getUser = getUser.map((item) => {
        if (item.id == obj.id) return obj
        else return item
    })
    dispatch({
        type: UPDATE_USERS,
        payload: getUser
    })
    dispatch(getUsers())
}

export const getEvents = () => (dispatch) => {
    const events = JSON.parse(localStorage.getItem('events')) || []
    dispatch({
        type: GET_EVENTS,
        payload: events
    })
}

export const storeEvents = (obj, setShow, form, setStartingDate) => (dispatch) => {
    let events = JSON.parse(localStorage.getItem('events')) || [];
    if (events.length == 0) events = [obj];
    else (events).push(obj)
    storeData('events', events)
   
}
export const deleteEvent = (obj, setEvent) => (dispatch) => {
    const events = JSON.parse(localStorage.getItem('events'));
    const filter_events = events.filter(item => item.id !== obj.id);
    dispatch({
        type: DELETE_EVENT,
        payload: filter_events
    })
    setEvent({ show: false, info: {} })
    dispatch(getEvents())

}

export const updateEvent = (updateEvent, obj) => (dispatch) => {
    let events = JSON.parse(localStorage.getItem('events'));
    events = events.map((item) => {
        if (item.id == updateEvent.id) return obj
        else return item
    })
    dispatch({
        type: UPDATE_EVENT,
        payload: events
    })
    dispatch(getEvents())
    

}
import { USERS } from "../../services/routes"
import { getData } from "../../services/StorageService"

export const USER_LOGIN = "USER_LOGIN"
export const GET_USER_LOGIN = "GET_USER_LOGIN"
export const STORE_USERS = "STORE_USERS"
export const GET_USERS = "GET_USERS"
export const GET_EVENTS = "GET_EVENTS"
export const DELETE_EVENT = "DELETE_EVENT"
export const UPDATE_USERS = "UPDATE_USERS"
export const UPDATE_EVENT = "UPDATE_EVENT"
export const DELETE_USERS="DELETE_USERS"
export const USER_LOGOT="USER_LOGOT"

export const userLogin = (obj, setLoading, router) => (dispatch) => {
    dispatch({
        type: USER_LOGIN,
        payload: obj
    })
    setLoading(false);
    router.replace(USERS)
}
export const getUserLogin = () => (dispatch) => {
    const obj = getData('loggedIn-user')

    dispatch({
        type: GET_USER_LOGIN,
        payload: obj
    })
}
export const userLogout = () => (dispatch) => {
    dispatch({
        type: USER_LOGOT,
    })
}
export const storeUsers = (obj) => (dispatch) => {
    var add = [];
    add = getData('add-users') || [];
    add.push(obj);
    dispatch({
        type: STORE_USERS,
        payload: add
    })
}

export const getUsers = () => (dispatch) => {
    const obj = getData('add-users')
    dispatch({
        type: GET_USERS,
        payload: obj
    })
}
export const deleteUsers = (obj) => (dispatch) => {
    const getUser = getData('add-users')
    const filter_user = getUser.filter(item => item.id !== obj.id);
    dispatch({
        type: DELETE_USERS,
        payload: filter_user
    })
    dispatch(getUsers())
}

export const updateUsers = (obj) => (dispatch) => {
    let getUser = getData('add-users')
    getUser = getUser.map((item)=>{
        if(item.id == obj.id) return obj
        else return item
    })
    dispatch({
        type: UPDATE_USERS,
        payload: getUser
    })
    dispatch(getUsers())
}

export const getEvents = () => (dispatch) =>{
    const events = getData('events')|| []
    dispatch({
      type:GET_EVENTS,
      payload:events
    })
  }

export const storeEvents = (obj,setShow,form,setStartingDate) =>(dispatch) =>{
  let events = getData('events') || [];
  if(events.length == 0) events = [obj];
  else (events).push(obj)
    localStorage.setItem('events',JSON.stringify(events));
    form.resetFields();
    setStartingDate('');
    setShow(false);
}
export const deleteEvent = (obj,setEvent,setShow,form,setStartingDate) => (dispatch) => {
    const events = getData('events')
    const filter_events = events.filter(item => item.id !== obj.id);
    dispatch({
        type: DELETE_EVENT,
        payload: filter_events
    })
    setEvent({show:false,info:{}})
    dispatch(getEvents())
    setShow(false);
    form.resetFields();
    setStartingDate('');
}

export const updateEvent = (updateEvent,obj,setShow,form,setStartingDate) => (dispatch) => {
    let events = getData('events')
    events = events.map((item)=>{
        if(item.id == updateEvent.id) return obj
        else return item
    })
    dispatch({
        type: UPDATE_EVENT,
        payload: events
    })
    dispatch(getEvents())
    setShow(false)
    form.resetFields();
    setStartingDate('');
}
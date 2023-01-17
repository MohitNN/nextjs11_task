
export const USER_LOGIN = "USER_LOGIN"
export const GET_USER_LOGIN = "GET_USER_LOGIN"
export const STORE_USERS = "STORE_USERS"
export const GET_USERS = "GET_USERS"
export const GET_EVENTS = "GET_EVENTS"
export const DELETE_USERS = "DELETE_USERS"
export const UPDATE_USERS = "UPDATE_USERS"

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
    console.log(obj, "------------users")

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
    const getUser = JSON.parse(localStorage.getItem('add-users'));
    for (var i = 0; i < getUser.length; i++) {
        if (obj.id === getUser[i].id) {
            getUser[i].firstname = obj.firstname;
            getUser[i].lastname = obj.lastname;
            getUser[i].email = obj.email;
            break;
        }
    }
    dispatch({
        type: UPDATE_USERS,
        payload: getUser
    })
    dispatch(getUsers())
}

export const getEvents = () => (dispatch) => {
    const events = localStorage.getItem('events');
    dispatch({
        type: GET_EVENTS,
        payload: events
    })
}

export const storeEvents = (obj, events) => (dispatch) => {

}


export const USER_LOGIN = "USER_LOGIN"
export const GET_USER_LOGIN = "GET_USER_LOGIN"
export const STORE_USERS = "STORE_USERS"
export const GET_USERS = "GET_USERS"
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
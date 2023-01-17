

export const USER_LOGIN = "USER_LOGIN"
export const GET_USER_LOGIN = "GET_USER_LOGIN"
export const STORE_USERS = "STORE_USERS"
export const GET_USERS = "GET_USERS"
export const GET_EVENTS ="GET_EVENTS"
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
export const getUser=()=>(dispatch)=>{
    const obj=localStorage.getItem('loggedIn-user');
    // const getLoggedInUser = async() =>{
    //     return await localStorage.getItem('loggedIn-user');
    //    }  
}

export const getEvents = () => (dispatch) =>{
  const events = JSON.parse(localStorage.getItem('events')) || []
  dispatch({
    type:GET_EVENTS,
    payload:events
  })
}

export const storeEvents = (obj,setShow,form,setStartingDate) =>(dispatch) =>{
  let events = JSON.parse(localStorage.getItem('events')) || [];
  if(events.length == 0) events = [obj];
  else (events).push(obj)
    localStorage.setItem('events',JSON.stringify(events));
    form.resetFields();
    setStartingDate('');
    setShow(false);
}
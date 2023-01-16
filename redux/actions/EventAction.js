

export const USER_LOGIN="USER_LOGIN"
export const GET_USER="GET_USER"
export const GET_EVENTS ="GET_EVENTS"

export const userLogin=(obj,setLoading,router)=>(dispatch)=>{
    dispatch({
        type: USER_LOGIN,
        payload:obj
      })
    
      setLoading(false);
      router.push("/")
}
export const getUser=()=>(dispatch)=>{
    const obj=localStorage.getItem('loggedIn-user');
    // const getLoggedInUser = async() =>{
    //     return await localStorage.getItem('loggedIn-user');
    //    }
    dispatch({
        type: GET_USER,
        payload:obj
      })
    
   
}

export const getEvents = () => (dispatch) =>{
  const events = localStorage.getItem('events');
  
}
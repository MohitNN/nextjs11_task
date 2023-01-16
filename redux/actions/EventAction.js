

export const USER_LOGIN="USER_LOGIN"
export const GET_USER="GET_USER"
export const STORE_USERS="STORE_USERS"

export const userLogin=(obj,setLoading,router)=>(dispatch)=>{
    dispatch({
        type: USER_LOGIN,
        payload:obj
      })
    
      setLoading(false);
      router.push("/")
}
export const getUserLogin=()=>(dispatch)=>{
    const obj=localStorage.getItem('loggedIn-user');
    // const getLoggedInUser = async() =>{
    //     return await localStorage.getItem('loggedIn-user');
    //    }
    dispatch({
        type: GET_USER,
        payload:obj
      })
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

export const storeUsers=(obj)=>(dispatch)=>{
    console.log(obj,"------------users")
    // const getUser= JSON.parse(localStorage.getItem('add-users'));
    // console.log(getUser,'------------ryeeiwr================')
    // getUser.push(obj)
    // console.log(setuser,"------------setuser")
    var a = [];
 // Parse the serialized data back into an aray of objects
 a = JSON.parse(localStorage.getItem('add-users'));
 // Push the new data (whether it be an object or anything else) onto the array
 a.push(data);
 // Alert the array value
 alert(a);  // Should be something like [Object array]
 // Re-serialize the array back into a string and store it in localStorage
//  localStorage.setItem('session', JSON.stringify(a));
    dispatch({
        type: STORE_USERS,
        payload:a
      })
}
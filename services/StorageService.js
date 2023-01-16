const storeLoggedInUser =(value) => {
    localStorage.setItem('loggedIn-user',JSON.stringify(value));
  }
  const getLoggedInUser = async() =>{
   return await localStorage.getItem('loggedIn-user');
  }
  const removeLoggedInUser = () => {
    localStorage.removeItem('loggedIn-user')
  }
  export {storeLoggedInUser,getLoggedInUser, removeLoggedInUser }
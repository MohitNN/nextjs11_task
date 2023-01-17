import React,{ useEffect} from 'react'
import {  Layout, theme,Button } from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import { getUserLogin, userLogout } from '../../redux/actions/EventAction';
import { useRouter } from 'next/router';
import { LOGIN } from '../../services/routes';
const { Header} = Layout;

const HeaderComp = () => {
  const dispatch=useDispatch()
  const router=useRouter();
  useEffect(()=>{
    dispatch(getUserLogin())
  },[dispatch])
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const login_user = useSelector((s) => s.EventReducer.user);
  const handleLogout=()=>{
     dispatch(userLogout());
     router.replace(LOGIN)
  }
  const handleLogin=()=>{
       router.replace(LOGIN)
  }
  return (
    <>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        {login_user?<Button type="primary" danger style={{marginLeft:"5px"}} onClick={()=>{handleLogout()}}>Logout</Button>:<Button type="primary" style={{marginLeft:"5px"}} onClick={()=>{handleLogin()}}>Login</Button>}
        </Header>
    </>
  )
}

export default HeaderComp
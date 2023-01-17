import { Layout, Menu } from 'antd';
import React, { useEffect ,useLayoutEffect} from 'react'
import { TeamOutlined, CalendarOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { CALENDAR, LOGIN, USERS } from '../../services/routes';
import { getUserLogin } from '../../redux/actions/EventAction';
import { useDispatch ,useSelector} from 'react-redux';
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Sidebar = ({ setCollapsed, collapsed }) => {

  const router = useRouter();
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getUserLogin())
  }, [dispatch])
  const login_user = useSelector((s) => s.EventReducer.user);
  const items = [
    getItem('Users', 'Users', <TeamOutlined />),
    getItem('Calender', 'Calender', <CalendarOutlined />),
  ];

  const handleNavigation = (key) => {
    switch (key) {
      case 'Users':
        {login_user?router.replace(USERS):router.replace(LOGIN)}
        break;
      case 'Calender':
        {login_user?router.replace(CALENDAR):router.replace(LOGIN)}
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={router.pathname == USERS ? ["Users"] : router.pathname == CALENDAR ? ["Calender"] : router.pathname == "/"  ? "" : ["Users"]} mode="inline" items={items} onClick={({ key }) => handleNavigation(key)} />
      </Sider> 
    </>
  )
}

export default (Sidebar)
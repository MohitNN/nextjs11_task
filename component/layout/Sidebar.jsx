import {  Layout, Menu} from 'antd';
import React from 'react'
import {  TeamOutlined, CalendarOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { CALENDAR, USERS } from '../../services/routes';
const {  Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Sidebar = ({setCollapsed,collapsed}) => {
  
  const router = useRouter();

      const items = [
        getItem('Users', 'Users', <TeamOutlined />),
        getItem('Calender', 'Calender', <CalendarOutlined />),
      ];

     const handleNavigation = (key) =>{
        switch (key) {
          case 'Users':
            router.replace(USERS)
            break;
          case 'Calender':
            router.replace(CALENDAR)
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
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={({key})=>handleNavigation(key)}/>
        </Sider>
    </>
  )
}

export default (Sidebar)
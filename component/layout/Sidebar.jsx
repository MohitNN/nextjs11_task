import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react'
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined, CalendarOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { CALENDAR, USERS } from '../../services/routes';
const { Header, Content, Footer, Sider } = Layout;

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
        // getItem('Option 1', '1', <PieChartOutlined />),
        // getItem('Option 2', '2', <DesktopOutlined />),
        getItem('Users', 'sub1', <UserOutlined />, [
          getItem('All Users', 'All Users'),
        ]),
        getItem('Calender', 'Calender', <TeamOutlined />),
        getItem('Files', 'Files', <FileOutlined />),
      ];

     const handleNavigation = (key) =>{
        switch (key) {
          case 'All Users':
            router.push(USERS)
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
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{height:'100vh'}}>
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
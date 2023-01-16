import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Sidebar from '../component/layout/Sidebar';
import HeaderComp from '../component/layout/HeaderComp';
import FooterComp from '../component/layout/FooterComp';
import {useRouter} from 'next/router';
import { CALENDAR } from '../services/routes';
import Calendar from './calendar';
const { Header, Content, Footer, Sider } = Layout;


const Layout_Comp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();
  console.log(router)
  console.log(CALENDAR)
  console.log(router.pathname)
  return (
    <>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
    
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Layout className="site-layout">
          <HeaderComp/>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              {/* {router.pathname == CALENDAR ? <Calendar/> :'/'} */}
            </div>
          </Content>
          <FooterComp/>
        </Layout>
      </Layout>
    </>
  )
}

export default Layout_Comp
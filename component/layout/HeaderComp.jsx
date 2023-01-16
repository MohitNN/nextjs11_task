import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const HeaderComp = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      />
    </>
  )
}

export default HeaderComp
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import {useRouter} from 'next/router';
import HeaderComp from '../component/layout/HeaderComp';
import FooterComp from '../component/layout/FooterComp';
import Sidebar from '../component/layout/Sidebar';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
const Calendar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (<>
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >

            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout className="site-layout">
                <HeaderComp />
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
                        <Breadcrumb.Item>Calendar</Breadcrumb.Item>
                        {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <FullCalendar plugins={[dayGridPlugin]}
                            initialView="dayGridMonth" />
                        {/* {router.pathname == CALENDAR ? <Calendar/> :'/'} */}
                    </div>
                </Content>
                <FooterComp />
            </Layout>
        </Layout>

    </>)
}
export default Calendar
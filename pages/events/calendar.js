import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Sidebar from './Sidebar';
import HeaderComp from './HeaderComp';
import FooterComp from './FooterComp';
import { useRouter } from 'next/router';
import { CALENDAR } from '../../services/routes';
const { Header, Content, Footer, Sider } = Layout;

const Calendar = () => {
    const events = [
        {
            title: 'The Title',
            start: '2023-09-01',
            end: '2023-09-02'
        }
    ]

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
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <FullCalendar plugins={[dayGridPlugin]}
                            initialView="dayGridMonth" events={events} />
                    </div>
                </Content>
                <FooterComp />
            </Layout>
        </Layout>


    </>)
}
export default Calendar
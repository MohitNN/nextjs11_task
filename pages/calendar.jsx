import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import {useRouter} from 'next/router';
import HeaderComp from '../component/layout/HeaderComp';
import FooterComp from '../component/layout/FooterComp';
import Sidebar from '../component/layout/Sidebar';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState ,useEffect } from "react";
import interactionPlugin from '@fullcalendar/interaction';
import EventModal from "../component/action/EventModal";
import { useSelector } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;
const Calendar = () => {

    const eventList = useSelector((state)=>state.EventReducer.events);

    const [collapsed, setCollapsed] = useState(false);
    const [show,setShow] = useState(false)
    const {
      token: { colorBgContainer },
    } = theme.useToken();

    const events = [{ 
        title: 'The Title', 
        start: '2023-01-16', 
        end: '2023-01-20',
      }]

      useEffect(()=>{
        localStorage.setItem('events',[])
      },[])
    return (<>
    <EventModal show={show} setShow={setShow} events={eventList}/>
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >

            <Layout className="site-layout">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
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
                        <FullCalendar plugins={[dayGridPlugin,interactionPlugin]}
                            initialView="dayGridMonth" events={events} selectable={true}  editable= {true}
                            dateClick={((info)=>setShow(true))}
                            eventClick={()=>{alert('clicked!!!');console.log('clicked!!!!!!!!!!!!!!!!!')}}
                            />
                    </div>
                </Content>
                <FooterComp />
            </Layout>
        </Layout>

    </>)
}
export default Calendar
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
       
                        <FullCalendar plugins={[dayGridPlugin,interactionPlugin]}
                            initialView="dayGridMonth" events={events} selectable={true}  editable= {true}
                            dateClick={((info)=>setShow(true))}
                            eventClick={()=>{alert('clicked!!!');console.log('clicked!!!!!!!!!!!!!!!!!')}}
                            />
                    

    </>)
}
export default Calendar
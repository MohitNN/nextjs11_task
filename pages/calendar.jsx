import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRouter } from "next/router";
import HeaderComp from "../component/layout/HeaderComp";
import FooterComp from "../component/layout/FooterComp";
import Sidebar from "../component/layout/Sidebar";
import { Breadcrumb, Layout, Menu, Tooltip, theme } from "antd";
import { useState, useEffect } from "react";
import interactionPlugin from "@fullcalendar/interaction";
import EventModal from "../component/action/EventModal";
import { useSelector ,useDispatch } from "react-redux";
import {  getEvents } from '../redux/actions/EventAction';
const { Header, Content, Footer, Sider } = Layout;
import moment from "moment";

const Calendar = () => {
  // const events = [{title:'e1',start:'2023-01-17',end:'2023-01-18'},{title:'e2',start:'2023-01-17',end:'2023-01-18'}]
  const events = useSelector((state) => state.EventReducer.events);
  console.log(events)

  const [collapsed, setCollapsed] = useState(false);
  const [startingDate, setStartingDate] = useState("");
  const [show, setShow] = useState(false);
  const [list,setList] = useState([]);
  // const [showEvent,setShowEvent] = useState(false);
  const [event,setEvent] = useState({show:false,info:{}});

  const dispatch = useDispatch();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

let pageLoaded = false;

  useEffect(()=>{
    if(!pageLoaded) dispatch(getEvents())
    return ()=>pageLoaded=true
  },[pageLoaded,show,dispatch])

  // useEffect(() => {
  //   if( !events || events?.length == 0) localStorage.setItem("events", []);
  //   else {return }
  // }, []);

  return (
    <>
      <EventModal
        show={show}
        setShow={setShow}
        starting_date={startingDate}
        setStartingDate={setStartingDate}
        // showEvent={showEvent}
        // setShowEvent={setShowEvent}
        event={event}
        setEvent={setEvent}
      />
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Layout className="site-layout">
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          <HeaderComp />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
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
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                selectable={true}
                editable={true}
                displayEventTime={true}
                dateClick={(info) => {
                  setShow(true);
                  setStartingDate(moment(info.date).format("YYYY-MM-DD"));
                }}
                eventClick={(info) => {
                  setShow(true)
                  setEvent((event)=>({show:true,info:info.event}))
                  // setEvent(info.event)
                  // setShowEvent(true);          
                }}
              />
            </div>
          </Content>
        </Layout>
        <FooterComp />
      </Layout>
    </>
  );
};
export default Calendar;

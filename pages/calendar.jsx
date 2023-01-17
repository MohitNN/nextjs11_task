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
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from '../redux/actions/EventAction';
const { Header, Content, Footer, Sider } = Layout;
import moment from "moment";
var $ = require("jquery");
const Calendar = () => {

    
    // const events = [{title:'e1',start:'2023-01-17',end:'2023-01-18'},{title:'e2',start:'2023-01-17',end:'2023-01-18'}]
    const events = useSelector((state) => state.EventReducer.events);
    console.log(events)

    const [collapsed, setCollapsed] = useState(false);
    const [startingDate, setStartingDate] = useState("");
    const [show, setShow] = useState(false);
    const [list, setList] = useState([]);
    // const [showEvent,setShowEvent] = useState(false);
    const [event, setEvent] = useState({ show: false, info: {} });

    const dispatch = useDispatch();
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    let pageLoaded = false;

    useEffect(() => {
        if (!pageLoaded) dispatch(getEvents())
        return () => pageLoaded = true
    }, [pageLoaded, show, dispatch])

    // useEffect(() => {
    //   if( !events || events?.length == 0) localStorage.setItem("events", []);
    //   else {return }
    // }, []);
//     const handleMouseEnter = (event, jsEvent, view) => {
//         $('.fc-event').append(`<div id="btn-id"><button id="edit" style="
//         background-color: green;
//         color: white;
//         border: none;
//         height: 30px;
//         width: 10%;
//         border-radius: 5px;
//         margin-left: 5px;
//         margin-bottom:5px;
//         cursor:pointer;
//     "><i class="fa fa-edit"></i></button><button id="delete" style="
//     background-color: red;
//     color: white;
//     border: none;
//     height: 30px;
//     width: 10%;
//     border-radius: 5px;
//     margin-left:5px;
//     margin-bottom:5px;
//     cursor:pointer;
// ">delete</button></div>`);
//         $("#edit").on('click', function () {

//             alert('clicked');

//         });
//         $("#delete").on('click', function () {

//             alert('delete clicked');

//         });

//     }

//     const handleMouseOut = () => {
       
//         $('#btn-id').remove('');
//     }
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
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                selectable={true}
                editable={true}
                displayEventTime={true}
                // eventMouseEnter={() => { handleMouseEnter() }}
                // eventMouseLeave={() => handleMouseOut()}
                dateClick={(info) => {
                    setShow(true);
                    setStartingDate(moment(info.date).format("YYYY-MM-DD"));
                }}
                eventClick={(info) => {
                    setShow(true)
                    setEvent((event) => ({ show: true, info: info.event }))
                    // setEvent(info.event)
                    // setShowEvent(true);          
                }}
            />
        </>
    );
};
export default Calendar;

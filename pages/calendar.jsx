import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Breadcrumb, Layout, Menu, Tooltip, theme } from "antd";
import { useState, useEffect } from "react";
import interactionPlugin from "@fullcalendar/interaction";
import EventModal from "../component/action/EventModal";
import { useSelector, useDispatch } from "react-redux";
import { getEvents, getUserLogin } from '../redux/actions/EventAction';
const { Header, Content, Footer, Sider } = Layout;
import moment from "moment";
import { useRouter } from "next/router";
import { CALENDAR, USERS } from "../services/routes";
var $ = require("jquery");
const Calendar = () => {
  const events = useSelector((state) => state.EventReducer.events);

  

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
    const router=useRouter();
    useEffect(()=>{
       dispatch(getUserLogin());
    },[])
    const login_user = useSelector((s) => s.EventReducer.user);
    useEffect(()=>{
         if(login_user){
            router.push(CALENDAR)
         }
         else
         {
            router.push("/login")
         }
    },[login_user])
  return (
    <>
      <EventModal
        show={show}
        setShow={setShow}
        starting_date={startingDate}
        setStartingDate={setStartingDate}
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
                eventBorderColor="rgba(0, 0, 0, 0.88)"
                dateClick={(info) => {
                  if(moment().format("YYYY-MM-DD") > moment(info.date).format("YYYY-MM-DD"))
                  {
                      alert('past date!!')
                  }
                  else{
                    setShow(true);
                    setStartingDate(moment(info.date).format("YYYY-MM-DD"));
                  }
                }}
                eventClick={(info) => {
                  setShow(true)
                  setEvent((event)=>({show:true,info:info.event}))
                }}
            />
        </>
    );
};
export default Calendar;

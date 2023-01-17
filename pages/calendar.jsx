import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Alert} from "antd";
import { useState, useEffect } from "react";
import interactionPlugin from "@fullcalendar/interaction";
import EventModal from "../component/action/EventModal";
import { useSelector, useDispatch } from "react-redux";
import { getEvents, getUserLogin } from '../redux/actions/EventAction';
import moment from "moment";
import { useRouter } from "next/router";
import { CALENDAR, LOGIN } from "../services/routes";
var $ = require("jquery");
const Calendar = () => {
  const events = useSelector((state) => state.EventReducer.events);
  console.log(events,'-----------------calendart events')
  const [startingDate, setStartingDate] = useState("");
  const [show, setShow] = useState(false);
  const [warning, setWarning] = useState(false);
  const [event, setEvent] = useState({ show: false, info: {} });

  const dispatch = useDispatch();
  let pageLoaded = false;

  useEffect(() => {
    if (!pageLoaded) dispatch(getEvents())
    return () => pageLoaded = true
  }, [pageLoaded, show, dispatch])
    const router=useRouter();
    useEffect(()=>{
       dispatch(getUserLogin());
    },[])

    const login_user = useSelector((s) => s.EventReducer.user);
    useEffect(()=>{
         if(login_user) router.push(CALENDAR)
         else router.push(LOGIN)
         
    },[login_user])

  return (
    <>
      {
        warning && <Alert
        style={{marginBottom:'15 px'}}
        message="please select date strting from today !"
        type="warning"
        closable
        onClose={() => setWarning(false)}
      />
      }
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
          if (moment().format("YYYY-MM-DD") > moment(info.date).format("YYYY-MM-DD")) setWarning(true)

          else {
            setWarning(false)
            setShow(true);
            setStartingDate(moment(info.date).format("YYYY-MM-DD"));
          }
        }}
        eventClick={(info) => {
          setShow(true)
          setEvent((event) => ({ show: true, info: info.event }))
        }}
      />
    </>
  );
};
export default Calendar;

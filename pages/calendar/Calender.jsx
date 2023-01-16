import FullCalendar from '@fullcalendar/react'
import React from 'react'

const Calender = () => {
  return (
    <>
        <FullCalendar plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"/>
    </>
  )
}

export default Calender
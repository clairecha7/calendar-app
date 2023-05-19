import {
  CalendarWrapper,
  PaginationButton,
  CalendarContainer,
  DayHeader,
  Day,
} from "../../styles/Calendar.style";
import moment from "moment";
import { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState(moment());
  console.log(date);

  const createDaysOfMonth = (refDate) => {
    const date = moment(refDate).endOf("month");
    const numberOfDays = date.date();
    const firstWeek = date.startOf("month").day();
    const calendarDays = [];

    for (let w = 0; w < firstWeek; w++) {
      calendarDays.push(<Day key={Math.random()} />);
    }

    for (let d = 1; d <= numberOfDays; d++) {
      calendarDays.push(<Day key={Math.random()}>{d}</Day>);
    }

    while (calendarDays.length % 7 !== 0) {
      calendarDays.push(<Day key={Math.random()} />);
    }

    return calendarDays;
  };

  const prevMounth = () => {
    setDate(date.clone().subtract(1, "month"));
  };

  const nextMounth = () => {
    setDate(date.clone().add(1, "month"));
  };

  return (
    <CalendarWrapper>
      <h2>{date.format("MMMM YYYY")}</h2>
      <div>
        <PaginationButton onClick={prevMounth}>&lt;</PaginationButton>
        <PaginationButton onClick={nextMounth}>&gt;</PaginationButton>
      </div>
      <CalendarContainer>
        <DayHeader>Sunday</DayHeader>
        <DayHeader>Monday</DayHeader>
        <DayHeader>Tuesday</DayHeader>
        <DayHeader>Wednesday</DayHeader>
        <DayHeader>Thursday</DayHeader>
        <DayHeader>Friday</DayHeader>
        <DayHeader>Saturday</DayHeader>
        {createDaysOfMonth(date)}
      </CalendarContainer>
    </CalendarWrapper>
  );
};

export default Calendar;

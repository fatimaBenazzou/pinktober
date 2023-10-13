import { useState } from "react";
import CalendarView from "@/Components/CalendarView";
import moment from "moment";
import { CALENDAR_INITIAL_EVENTS } from "@/utils/dummyData";

import { RIGHT_DRAWER_TYPES } from "@/utils/globalConstantUtil";

import { useNotification, useAppDispatch } from "@/hooks";
import { openRightDrawer } from "@/app/context/rightDrawer";

const INITIAL_EVENTS = CALENDAR_INITIAL_EVENTS;

function Calendar() {
	const dispatch = useAppDispatch();
	const { Notify } = useNotification();

	const [events, setEvents] = useState(INITIAL_EVENTS);

	// Add your own Add Event handler, like opening modal or random event addition
	// Format - {title :"", theme: "", startTime : "", endTime : ""}, typescript version comming soon :)
	const addNewEvent = (date: Date) => {
		const randomEvent = INITIAL_EVENTS[Math.floor(Math.random() * 10)];
		const newEventObj = {
			title: randomEvent.title,
			theme: randomEvent.theme,
			startTime: moment(date).startOf("day"),
			endTime: moment(date).endOf("day"),
		};
		setEvents([...events, newEventObj]);
		Notify("Adding an event", "New Event Added!");
	};

	// Open all events of current day in sidebar
	const openDayDetail = ({ filteredEvents, title }: { filteredEvents: CalendarFormat[]; title: string }) => {
		dispatch(
			openRightDrawer({
				header: title,
				bodyType: RIGHT_DRAWER_TYPES.CALENDAR_EVENTS,
				extraObject: { filteredEvents },
			})
		);
	};

	return (
		<>
			<CalendarView calendarEvents={events} addNewEvent={addNewEvent} openDayDetail={openDayDetail} />
		</>
	);
}

export default Calendar;

import React, { FC } from 'react';
import { Calendar } from 'antd';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formatDate } from '../utils/date';


interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {

    const dateCellRender = (value: Moment) => {
        const formattedDate = formatDate(value.toDate());
        const currentDayEvents = props.events.filter(ev => ev.date === formattedDate);

        return (
          <div>
            {currentDayEvents.map((ev, idx) =>
                <div key={idx}>
                    {ev.description}
                </div>
            )}
          </div>
        );
      };

    return (
        <div>
            <Calendar 
                dateCellRender={dateCellRender}
            />
        </div>
    );
};

export default EventCalendar;
// DateCard.js
import React from 'react';
import "../styles/DateCard.css"

const DateCard = ({ date }) => {
    const dayOfMonth = date.getDate();
    const dayOfWeekFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'short' });
    const dayOfWeek = dayOfWeekFormatter.format(date);

    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();

    return (
        <div className={`date-card ${isToday ? 'today' : ''}`}>
            <div className="date-number">{dayOfMonth}</div>
            <div className="day-of-week">{dayOfWeek}</div>
        </div>
    );
};

export default DateCard;
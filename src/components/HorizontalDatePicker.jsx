// HorizontalDatePicker.js
import React, { useState, useEffect } from 'react';
import DateCard from './DateCard';
import '../styles/HorizontalDate.css'; // We'll create this CSS file
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";

const HorizontalDatePicker = () => {
    
    const [startDateWindow, setStartDateWindow] = useState(new Date());
    const [dates, setDates] = useState([]);

    useEffect(() => {
        generateSevenDayWindow(startDateWindow);
    }, [startDateWindow]); 

    const generateSevenDayWindow = (start) => {
        const sevenDays = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(start);
            date.setDate(start.getDate() + i);
            sevenDays.push(date);
        }
        setDates(sevenDays);
    };

    const handlePrevWeek = () => {
        const newStartDate = new Date(startDateWindow);
        newStartDate.setDate(startDateWindow.getDate() - 7); // Go back 7 days
        setStartDateWindow(newStartDate);
    };

    const handleNextWeek = () => {
        const newStartDate = new Date(startDateWindow);
        newStartDate.setDate(startDateWindow.getDate() + 7); 
        setStartDateWindow(newStartDate);
    };

    
    const monthYearFormatter = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        year: 'numeric'
    });

    return (
        <div className="date-picker-container">
            <div className="month-header">
                
                <span className="month-display">
                        {monthYearFormatter.format(startDateWindow)}
                </span>
            </div>
            <div className="date-carousel">
                <div className="arrow left-arrow" onClick={handlePrevWeek}>
                    <SlArrowLeft style={{color:"#6bf7bf"}} />
                </div>
                <div className="date-cards-wrapper">
                    {dates.map((date, index) => (
                        <DateCard key={index} date={date} />
                    ))}
                </div>
                <div className="arrow right-arrow" onClick={handleNextWeek}>
                    <SlArrowRight style={{color:"#6bf7bf"}} />
                </div>
            </div>
        </div>
    );
};

export default HorizontalDatePicker;
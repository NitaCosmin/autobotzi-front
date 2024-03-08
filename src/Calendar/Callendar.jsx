import React, { useState, useEffect } from 'react';
import './Calendar.css';

const Calendar = () => {
    const [currMonth, setCurrMonth] = useState(new Date().getMonth());
    const [currYear, setCurrYear] = useState(new Date().getFullYear());

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    const getFebDays = (year) => {
        return isLeapYear(year) ? 29 : 28;
    };

    const generateCalendar = (month, year) => {
        let calendar_days = document.querySelector('.calendar-days');
        let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        calendar_days.innerHTML = '';

        let first_day = new Date(year, month - 1, 1); // Adjusted line

        for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
            let day = document.createElement('div');
            if (i >= first_day.getDay()) {
                day.classList.add('calendar-day-hover');
                day.innerHTML = i - first_day.getDay() + 1;
                if (i - first_day.getDay() + 1 === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth() + 1) {
                    day.classList.add('curr-date');
                }
            }
            calendar_days.appendChild(day);
        }
    };

    useEffect(() => {
        generateCalendar(currMonth, currYear);
    }, [currMonth, currYear]);

    const handlePrevYear = () => {
        setCurrYear(currYear - 1);
    };

    const handleNextYear = () => {
        setCurrYear(currYear + 1);
    };

    const handleMonthChange = (month) => {
        setCurrMonth(month);
    };

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark');
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <span className="month-picker" id="month-picker">{monthNames[currMonth]}</span>
                <div className="year-picker">
                    <span className="year-change" id="prev-year" onClick={handlePrevYear}>
                        {'<'}
                    </span>
                    <span id="year">{currYear}</span>
                    <span className="year-change" id="next-year" onClick={handleNextYear}>
                        {'>'}
                    </span>
                </div>
            </div>
            <div className="calendar-body">
                <div className="calendar-week-day">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div className="calendar-days"></div>
            </div>
            <div className="calendar-footer">
                <div className="toggle" onClick={toggleDarkMode}>
                    <span>Dark Mode</span>
                    <div className="dark-mode-switch">
                        <div className="dark-mode-switch-ident"></div>
                    </div>
                </div>
            </div>
            <div className="month-list"></div>
        </div>
    );
};

export default Calendar;

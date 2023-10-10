import React, { useState } from 'react';

import Calendar from 'react-calendar';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './Header';
import Footer from './Footer';
import 'react-calendar/dist/Calendar.css';

function CalendarPage() {
    const [date, setDate] = useState(new Date());
    const [participants] = useState(['Participant 1', 'Participant 2', 'Participant 3']);

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="calendar-container">
                    <Calendar onChange={setDate} value={date} />
                </div>
                <div className="participants-container">
                    <button className="btn btn-success submit-btn me-3">참가하기</button>
                    <button className="btn btn-success submit-btn" onClick={handleShare}>
                        공유하기
                    </button>

                    <h2>참여자 목록</h2>
                    {participants.map((participant, index) => (
                        <p key={index}>{participant}</p>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CalendarPage;

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import InputMask from 'react-input-mask';

import 'react-datepicker/dist/react-datepicker.css';
import './CreateRoom2.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function CreateRoom2() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [roomName, setRoomName] = useState('');
    const [maxPeople, setMaxPeople] = useState('');
    const [deadlineTime, setDeadlineTime] = useState(null);

    return (
        <div>
            <Header />

            <div className="container">
                {/* <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        ></input>
                        <div id="emailHelp" class="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">
                            Password
                        </label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form> */}

                <div className="form-container">
                    <label>방이름을 정해주세요</label>
                    <input
                        type="text"
                        placeholder="방 이름"
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                    />
                    <label>대략적인 기간을 입력해주세요</label>
                    <div className="date-range">
                        <DatePicker
                            placeholderText="언제부터"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                        />
                        <DatePicker
                            placeholderText="언제까지"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                        />
                    </div>
                    <label>모임의 최대인원을 입력해주세요</label>
                    <InputMask
                        mask="999"
                        placeholder="최대 인원"
                        value={maxPeople}
                        onChange={(e) => setMaxPeople(e.target.value)}
                    />
                    <label>투표 마감시간을 정해주세요</label>
                    <DatePicker
                        selected={deadlineTime}
                        onChange={(date) => setDeadlineTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="시간"
                        dateFormat="h:mm aa"
                        placeholderText="마감시간"
                    />
                    <div className="button-wrapper">
                        <Link to="/CalanderPage">
                            <button className="btn btn-success submit-btn">완료</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreateRoom2;

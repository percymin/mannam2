import React, { useState } from 'react';
import './CreateRoom.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CreateRoom() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = () => {
        const data = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
        };

        // axios POST 요청을 통해 데이터 서버로 전송
        axios
            .post('/api/data', data)
            .then((response) => {
                // 성공적인 응답 처리
                console.log(response.data);
            })
            .catch((error) => {
                // 오류 처리
                console.error(error);
            });
    };

    return (
        <div>
            <Header />
            <div className="content container">
                <input
                    type="text"
                    className="form-control input-box"
                    placeholder="이름 입력"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    className="form-control input-box"
                    placeholder="이메일 입력"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="phonenumber"
                    className="form-control input-box"
                    placeholder="전화번호 입력"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

                {/* "완료" 버튼 클릭 시 handleSubmit 호출 */}
                <button className="btn btn-success submit-btn" onClick={handleSubmit}>
                    완료
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default CreateRoom;

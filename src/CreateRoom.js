import React from 'react';
import './CreateRoom.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function CreateRoom() {
    return (
        <div>
            <Header />
            <div className="content container">
                <input type="text" className="form-control input-box" placeholder="이름 입력" />
                <input type="email" className="form-control input-box" placeholder="이메일 입력" />
                <input type="phonenumber" className="form-control input-box" placeholder="전화번호 입력" />

                <Link to="/CreateRoom2">
                    <button className="btn btn-success submit-btn">완료</button>
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default CreateRoom;

import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <header className="bg-light p-3">
            <div className="container d-flex justify-content-between align-items-center">
                <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
                    로고
                </Link>
                <div className="menu-bar">
                    <a href="#" className="btn btn-outline-secondary me-2">
                        회원가입
                    </a>
                    <a href="#" className="btn btn-outline-secondary me-2">
                        로그인
                    </a>
                    <a href="#" className="btn btn-outline-secondary me-2">
                        이용약관
                    </a>
                    <a href="#" className="btn btn-outline-secondary">
                        기타
                    </a>
                </div>
            </div>
        </header>
        // <header>
        //     <nav className="navbar">
        //         <a href="/" className="logo">
        //             Logo
        //         </a>
        //         <div className="nav-links">
        //             <a href="/signup" className="nav-link">
        //                 회원가입
        //             </a>
        //             <a href="/login" className="nav-link">
        //                 로그인
        //             </a>
        //             <a href="/support" className="nav-link">
        //                 고객센터
        //             </a>
        //         </div>
        //     </nav>
        // </header>
    );
}

export default Header;

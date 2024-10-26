import React, { useState } from 'react';
import { Badge, Button, Nav, Navbar } from "react-bootstrap";
import { CiGlobe, CiSearch, CiSettings, CiShoppingCart } from "react-icons/ci";
import { LuMail, LuMaximize } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logoutuser } from "../Service/Action/Product.action";

const Header = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutuser());
        navigate('/');
    };

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    return (
        <>
            <div className="page-wrapper w-100">
                <header>
                    <Navbar expand="lg" >
                        <div className="container-fluid">
                            <div className="col-2">
                                <div className="logo">
                                    <a href="#">
                                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp" alt="img" width={140} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="top-nav-serach">
                                    <form action="#">
                                        <div className="searchinputs">
                                            <input type="text" placeholder="Serach"></input>
                                            <div className="serach-addon">
                                                <span>
                                                    <CiSearch />
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                    <Nav.Link href="#action1" className="in-icon">
                                        <CiGlobe />
                                    </Nav.Link>
                                    <Nav.Link href="#action1" className="in-icon" onClick={toggleFullScreen}>
                                        <LuMaximize />
                                    </Nav.Link>
                                    <Nav.Link href="#action1" className="in-icon">
                                        <LuMail />
                                    </Nav.Link>
                                    <Nav.Link href="#action1" className="in-icon">
                                        <FaRegBell />
                                    </Nav.Link>
                                    <Nav.Link href="#action1" className="in-icon">
                                        <CiSettings />
                                    </Nav.Link>
                                    <button className="dropdown-item" onClick={handleLogout}><CiLogout /> Logout</button>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>
                </header>
            </div>
        </>
    )
}

export default Header;

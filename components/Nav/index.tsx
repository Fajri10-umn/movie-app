import React from "react";

export default function index() {
    return (
        <div>
            <div className="nav-wrapper">
                <div className="container">
                    <ul className="nav-menu" id="nav-menu">
                        <li>
                            <a href="#" className="logo">
                                <i className='bx bx-movie-play bx-tada main-color'></i>Mo<span className="main-color">vi</span>e
                            </a>
                        </li>
                        <li><a href="Home">Home</a></li>
                        <li className="dropdown"><a href="javascript:void(0)" className="dropbtn">Movies</a>
                            <div className="dropdown-content">
                                <div><a href="#">Most watched</a></div>
                                <div><a href="#">4k</a></div>
                                <div><a href="#">IMAX</a></div>
                                <div><a href="#">BlueRay</a></div>
                            </div></li>
                        <li className="dropdown"><a href="javascript:void(0)" className="dropbtn">Tv Series</a>
                            <div className="dropdown-content">
                                <div><a href="#">Most watched</a></div>
                                <div><a href="#">Marvel Studio Series</a></div>
                                <div><a href="#">Amazon Prime</a></div>
                                <div><a href="#">Apple TV+ Series</a></div>
                                <div><a href="#">Disney+ Series</a></div>
                                <div><a href="#">HBO Series</a></div>
                                <div><a href="#">Netlix Series</a></div>
                            </div>
                        </li>
                        <li><a href="Genre">Genres</a></li>
                    </ul>
                    <div className="hamburger-menu" id="hamburger-menu">
                        <div className="hamburger"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

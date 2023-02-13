import * as React from 'react';
import './navbar.style.css';
const TrainingsNavbar = () => {
    return (<div className="vh-100 d-flex align-items-center position-fixed start-0 top-0" role="navigation">
        <div className="p-2">
            <div id="mainNav">
                <ul className="list-unstyled rounded ms-2">
                    <li><a className="vlink rounded border-0" href="#"><i className="fas fa-home"></i> <span>Home</span></a>
                    </li>
                    <li><a className="vlink rounded" href="#"><i className="fas fa-th"></i> <span>Services</span></a>
                    </li>
                    <li><a className="vlink rounded" href="#"><i className="fas fa-headset"></i>
                        <span>Call Us</span></a></li>
                    <li><a className="vlink rounded" href="#"><i className="far fa-calendar-alt"></i>
                        <span>Schedule</span></a></li>
                    <li><a className="vlink rounded" href="#"><i className="fas fa-user-circle"></i>
                        <span>About Us</span></a></li>
                    <li><a className="vlink rounded" href="#"><i className="fas fa-newspaper"></i> <span>News</span></a>
                    </li>
                    <li><a className="vlink rounded" href="#"><i className="fas fa-photo-video"></i>
                        <span>Gallery</span></a></li>
                </ul>
            </div>
        </div>
    </div>);
}

export default TrainingsNavbar;

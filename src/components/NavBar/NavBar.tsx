import * as React from 'react';
import {routePaths} from '../../config/routes';
import './navbar.style.css';

const NavBar = () => {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-info p-3">
        <div className="container-fluid">
            <a className="navbar-brand" href={routePaths.home}>Logo tu...</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item">
                        <a className="nav-link mx-2 active color" aria-current="page" href={routePaths.info}>Aktualne info</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link mx-2 dropdown-toggle color" href={routePaths.trainings}
                           id="navbarDropdownMenuLink"
                           role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tréningy
                        </a>
                        <ul className="dropdown-menu background" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href={routePaths.trainings_group1}>Skupina 1</a></li>
                            <li><a className="dropdown-item" href={routePaths.trainings_group2}>Skupina 2</a></li>
                            <li><a className="dropdown-item" href={routePaths.trainings_parkour1}>Parkúr 1</a></li>
                            <li><a className="dropdown-item" href={routePaths.trainings_parkour2}>Parkúr 2</a></li>
                            <li><a className="dropdown-item" href={routePaths.trainings_public}>Verejné</a></li>
                            <li><a className="dropdown-item" href={routePaths.trainings_individual}>Individuálne</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2 color" href={routePaths.trainers}>Tréneri</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2 color" href={routePaths.gallery}>Galéria</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2 color" href={routePaths.contests}>Súťaže</a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
                    <li className="nav-item mx-2">
                        <a className="nav-link text-dark h5" href="" target="blank"><i
                            className="bi bi-envelope-at-fill color"/></a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link text-dark h5" href="" target="blank"><i
                            className="bi bi-facebook color"/></a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link text-dark h5" href="" target="blank"><i
                            className="bi bi-twitter color"/></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>);
}

export default NavBar;

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

            <div className=" collapse navbar-collapse " id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item">
                        <a className="nav-link mx-2 active color" aria-current="page" href={routePaths.info}>Aktualne info</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2 color" href={routePaths.history}>História klubu</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link mx-2 dropdown-toggle color" href={routePaths.trainings}
                           id="navbarDropdownMenuLink"
                           role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tréningy
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href={routePaths.trainings_group1}>Skupina 1</a></li>
                            <li><a className="dropdown-item" href={routePaths.trainings_group2}>Skupina 2</a></li>
                            <li><a className="dropdown-item" href={routePaths.trainings_parkour1}>Parkúr 1</a></li>
                            <li><a className="dropdown-item" href={routePaths.trainings_parkour2}>Parkúr 2</a></li>
                            <li><a className="dropdown-item" href={routePaths.trainings_public}><i
                                className="bi bi-people"/>Verejné</a></li>
                            <li><a className="dropdown-item" href={routePaths.trainings_individual}><i className="bi bi-person c"/> Individuálne</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2 color" href={routePaths.gallery}>FotoGaléria</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2 color" href={routePaths.trainers}>Naši tréneri</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2 color" href={routePaths.contests}>Súťaže</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2 color" href={routePaths.contacts}>Kontakty</a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
                    <li className="nav-item mx-2">
                        <a className="nav-link text-dark h5" href="www.gmail.sk" target="blank"><i
                            className="bi bi-envelope-at-fill color"/></a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link text-dark h5" href="www.facebook.org" target="blank"><i
                            className="bi bi-facebook color"/></a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link text-dark h5" href="www.twitter.sk" target="blank"><i
                            className="bi bi-twitter color"/></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>);
}

export default NavBar;

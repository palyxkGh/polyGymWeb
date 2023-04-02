import * as React from 'react';
import {configMap, routePaths} from '../../config/routes';
import {RouteConfig} from '../../types/routeConfig';
import Logo from '../../assets/images/logo/SSG_logo_white.png';
import './navbar.style.css';
import Athlete from '../Athlete';

const NavBar = () => {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-info p-3">
        <div className="container-fluid">
            <a className="navbar-brand" href={routePaths.home}><img src={Logo} alt="logo" width="180px" height="auto"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className=" collapse navbar-collapse " id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item">
                        <a className="nav-link mx-2 color" aria-current="page" href={routePaths.info}>
                            <span>
                                <Athlete/>
                                Aktualne info
                            </span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2 color" href={routePaths.history}><span><Athlete/>História klubu</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link mx-2 dropdown-toggle color" href={routePaths.trainings}
                           id="navbarDropdownMenuLink"
                           role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span><Athlete/>Tréningy</span>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            {
                                configMap.map(({id, route, name}: RouteConfig) => {
                                    return (
                                        <li key={id}><a className="dropdown-item " href={route}><span><Athlete type="transparent"/>{name}</span></a></li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2 color" href={routePaths.gallery}><span><Athlete/>FotoGaléria</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2 color" href={routePaths.trainers}><span><Athlete/>Naši tréneri</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2 color" href={routePaths.contests}><span><Athlete/>Súťaže</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2 color" href={routePaths.contacts}>
                        <span>
                            <Athlete/>
                            Kontakty
                        </span>
                        </a>

                    </li>
                </ul>

            </div>
        </div>
    </nav>);
}

export default NavBar;

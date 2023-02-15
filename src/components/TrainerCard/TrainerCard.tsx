import * as React from 'react';
import './trainerCard.style.css';
import {getRouteConfig} from '../../config/routes';

type TrainerCardProps = {
    id: number;
    name: string;
    phone: string;
    email: string;
    imgSrc: string;
    trening: string[];
    onClick: (id: number) => void;
}
const TrainerCard: React.FC<TrainerCardProps> = ({id, name, phone, email, imgSrc, trening, onClick}) => {
    return <div className="d-flex  flex-column cardStyle" onClick={() => onClick(id)}>
        <div className="card-head card-img card" >
            imgHere
        </div>
        <div className="flex-column card-body card">
            <div className="flex-row">
            <h5 className="card-title">{name}</h5>
            </div>
            <div className="d-flex flex-column justify-content-between align-baseline">
                <div className="d-flex flex-row">
                <h5 className="card-subtitle text-muted p-2"><i className="bi bi-telephone"/></h5>
                        <h6 className="card-subtitle text-muted p-2">{phone}</h6>
                    </div>
<div className="d-flex flex-row ">
                <h5 className="card-subtitle text-muted p-2"><i className="bi bi-envelope"/></h5>
                        <h6 className="card-subtitle text-muted p-2">{email}</h6>
                    </div>
                </div>
        </div>
        {/*<a>detail</a>*/}
        <p>Treningy:</p>
        <div className="d-flex flex-row">

        {
            trening.map(t => {
                const config = getRouteConfig(t);
                return <div className="p-1" key={t}><a key={t} href={config?.route}>{config?.name}</a></div>
            })
        }
        </div>

    </div>;
}

export default TrainerCard;

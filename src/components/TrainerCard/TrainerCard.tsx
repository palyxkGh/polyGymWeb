import * as React from 'react';
import './trainerCard.style.css';

type TrainerCardProps = {
    id: string;
    name: string;
    phone: string;
    email: string;
    imageSrc: string;
}
const TrainerCard: React.FC<TrainerCardProps> = ({name, phone, email, imageSrc}) => {
    return <div className="card cardStyle">
        <div className="card-head" >
            imgHere
        </div>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="">
                <h4 className="card-subtitle mb-2 text-muted"><i className="bi bi-telephone"/></h4>
                <h4>{phone}</h4>
                </div>
            <div>
                <h4 className="card-subtitle mb-2 text-muted"><i className="bi bi-telephone"/></h4>
                <h4>{email}</h4>
            </div>
        </div>
        <a>detail</a>
        <button>treningy</button>
    </div>;
}

export default TrainerCard;

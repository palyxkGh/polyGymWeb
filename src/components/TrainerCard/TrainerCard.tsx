import * as React from 'react';
import './trainerCard.style.css';
import {getRouteConfig} from '../../config/routes';
import {Trainer} from '../../types/trainers';

import trainer_1 from '../../assets/images/trainers/marek_gadzinovsky.png';
import trainer_2 from '../../assets/images/trainers/vladimir_klacek.png';
import trainer_3 from '../../assets/images/trainers/jakub_miscik.png'
import trainer_4 from '../../assets/images/trainers/jakub_petrunko.png'

const getImage = (id: number) => {
    switch (id) {
        case 1:
            return trainer_1;
        case 2:
            return trainer_2;
        case 3:
            return trainer_3;
        case 4:
            return trainer_4;
    }
}

const TrainerCard: React.FC<Trainer> = ({
                                            id,
                                            name,
                                            education,
                                            since,
                                            qualification,
                                            phone,
                                            email,
                                            trainings
                                        }: Trainer) => {
    return <div className="card container-fluid card-style">
        <div className="row wrap">
            <div className="col-sm-6">
                <p className="h4">{name}</p>
                <p className="h6">{education}</p>
                <p className="h6">{qualification}</p>
                <p className="h6">{since}</p>
                {/*<div className="d-flex flex-column-sm justify-content-around p-2">*/}
                {/*    <div className="d-flex flex-column p-1 justify-content-between m-2">*/}
                {/*        <div className="m-1">*/}
                {/*            <i className="bi bi-telephone"/>*/}
                {/*        </div>*/}
                {/*        <div className="m-1">*/}
                {/*            <i className="bi bi-envelope"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    /!*<div className="d-flex flex-column p-1 justify-content-between m-2">*!/*/}
                {/*    /!*    <div className="m-1">*!/*/}
                {/*    /!*        <p className="card-subtitle">{phone}</p>*!/*/}
                {/*    /!*    </div>*!/*/}
                {/*    /!*    <div className="m-1">*!/*/}
                {/*    /!*        <p className="card-subtitle">{email}</p>*!/*/}
                {/*    /!*    </div>*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</div>*/}
            </div>
            <div className="col-sm-6 img">
                <img src={getImage(id)} width="100%" className="img-fluid" height="auto" alt={name}/>
            </div>
        </div>
        <div className="card-footer row">
            <div className="h6 align-self-center col">Tréningy:</div>
            {
                trainings.map(t => {
                    const config = getRouteConfig(t);
                    return <div className="col p-1"><a className="btn btn-outline-info p-2" key={t} href={config?.route}
                                   role="button">{config?.name}</a></div>
                })
            }
        </div>
    </div>
}

export default TrainerCard;

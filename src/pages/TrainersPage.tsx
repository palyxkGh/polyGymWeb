import * as React from 'react';
import TrainerCard from '../components/TrainerCard';
import {trainerCard_DATA} from '../data/trainersData';
import './trainersPage.styles.css';
import {Trainer} from '../types/trainers';

const TrainersPage = () => {

    return (
        <div className="trainersPage">
            <div className="d-flex flex-column trainersColumn">
                {
                    trainerCard_DATA.map((trainer: Trainer) => {
                        return (<TrainerCard key={trainer.id} {...trainer}/>);
                    })
                }
            </div>
        </div>
    );
}

export default TrainersPage;

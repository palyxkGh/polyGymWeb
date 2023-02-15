import * as React from 'react';
import {useEffect, useState} from 'react';
import TrainerCard from '../components/TrainerCard';
import {trainerCard_DATA} from '../config/trainersData';
import './trainersPage.style.css';
const TrainersPage = () => {

    const [selectedTrainer, setSelectedTrainer] = useState<number|null>(null);

    useEffect(() => {
        console.log(selectedTrainer);
    },[selectedTrainer])
    return (
        <div className="flex-column trainersPage">
        <div className="d-flex flex-row">
            {

                trainerCard_DATA.map((trainer) => {
                    return <TrainerCard key={trainer.id} {...trainer} onClick={(id) => setSelectedTrainer(id)}/>
            })
            }
        </div>
        <div className="flex-column">
            detail: <p>{selectedTrainer}</p>
        </div>
        </div>
    );
}

export default TrainersPage;

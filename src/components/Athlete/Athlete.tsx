import * as React from "react";
import AthleteImg40 from '../../assets/images/athlete/SSG_athlete_40.png';
import AthleteImgT from '../../assets/images/athlete/SSG_athlete_transparent_20.png';

type AthleteSize = 'small' | 'medium' | 'large' | 'extraLarge'| 'transparent';

type AthleteProps = {
    type?: AthleteSize
    // as hex code
}

const Athlete: React.FC<AthleteProps> = ({type="small"}: AthleteProps) => {

    return (
        <img src={type === 'transparent' ? AthleteImgT :AthleteImg40} height={type === 'transparent'? 20 : 20} width={type === 'transparent'? 25 : 20} alt="athleteImg"/>
    );
};

export default Athlete;

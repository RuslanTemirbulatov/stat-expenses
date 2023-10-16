import React from 'react';
import Foot from '../views/global/Foot';
import DataList from '../views/global/local/DataList';

const Plan = ({ statData }) => {


    return (
        <>
            <span>Страница планирования</span>
            <DataList viewType={'Расход'} data={statData} />
            <Foot />
        </>
    );
};

export default Plan;
import React, { useState } from 'react';
import DataList from '../views/global/local/DataList';
import Foot from '../views/global/Foot';
import DataChart from '../views/global/local/DataChart';
import { useParams } from 'react-router-dom';

const Stat = ({statData}) => {

    const { viewType } = useParams()
    const [ showChart, setShowChart] = useState()
    return (
        <>
            <DataList viewType={viewType} setShow={setShowChart} data={statData} />
            <DataChart viewType={viewType} show={showChart} data={statData} />
            <Foot />
        </>
    );
};

export default Stat;
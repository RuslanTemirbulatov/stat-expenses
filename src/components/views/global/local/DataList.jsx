import React from 'react';
import css from '../../../../styles/dataList';
import { useNavigate } from 'react-router-dom';

const { DataContainer, ContentLine, ContentCell, ButtonsItem, ButtonsLine} = css

const DataList = ({data = [], setShow, viewType}) => {


    const navigate = useNavigate()
    const filterData = data.filter(item => item.split('::')[1] === viewType)
    const filterDataSumm = data.filter(item => item.split('::')[1] === viewType)
    .reduce((summ, item) => {
        return summ = summ + +(item.split('::')[0])
    }, 0)
    const filterDataDelta = data
    .reduce((summ, item) => {
        if ( item.split('::')[1] === "Доход") {
            return summ = summ + +(item.split('::')[0])
        } else {
            return summ = summ - +(item.split('::')[0])
        }
    }, 0)


    const reduceDataType1 = () => {
        navigate('/stat/Доход')
        setShow(false)
    }
    const reduceDataType2 = () => {
        navigate('/stat/Расход')
        setShow(true)
    }
    const reduceDataType3 = () => {
        navigate('/stat/Общее')
        setShow(true)
    }

    return (
        <>
         <ButtonsLine>
                    <ButtonsItem onClick={reduceDataType1} style={{fontWeight: viewType === 'Доход' ? 'bold' : ''}}>Доход</ButtonsItem>
                    <ButtonsItem onClick={reduceDataType2} style={{fontWeight: viewType === 'Расход' ? 'bold' : ''}}>Расход</ButtonsItem>
                    <ButtonsItem onClick={reduceDataType3} style={{fontWeight: viewType === 'Общее' ? 'bold' : ''}}>общее</ButtonsItem>
                </ButtonsLine>
            <DataContainer>
                {filterData.length > 0 && <>
                    {filterData.map((item) => (
                    <ContentLine style={{marginBottom: '10px'}}>
                        <ContentCell width={'20%'}>{item.split('::')[0]}</ContentCell>
                        <ContentCell width={'20%'}>{item.split('::')[1]}</ContentCell>
                        <ContentCell width={'60%'}>{item.split('::')[2]}</ContentCell>
                    </ContentLine>
                    ))}
                    <ContentLine>
                        <ContentCell width={'20%'}>{filterDataSumm}</ContentCell>
                        <ContentCell width={'20%'}>--</ContentCell>
                        <ContentCell width={'60%'}>--</ContentCell>
                    </ContentLine>
                </>}
                    
                {filterData.length === 0 && <>
                    {data.map((item) => (
                    <ContentLine style={{marginBottom: '10px'}}>
                        <ContentCell width={'20%'}>{item.split('::')[0]}</ContentCell>
                        <ContentCell width={'20%'}>{item.split('::')[1]}</ContentCell>
                        <ContentCell width={'60%'}>{item.split('::')[2]}</ContentCell>
                    </ContentLine>
                    ))}
                    <ContentLine>
                        <ContentCell width={'20%'}>{filterDataDelta}</ContentCell>
                        <ContentCell width={'20%'}>--</ContentCell>
                        <ContentCell width={'60%'}>--</ContentCell>
                    </ContentLine>
                </>}
            </DataContainer>
        </>
    );
};

export default DataList;
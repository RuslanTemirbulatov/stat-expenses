import React, { useEffect, useState } from 'react';
import css from '../../../../styles/dataList';
import { ResponsivePie } from '@nivo/pie';

const { DataContainer } = css

const MyResponsivePie = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 35,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

const DataChart = ({ data=[], show }) => {

    const [r01, setR01] = useState(0)
    const [r02, setR02] = useState(0)
    const [r03, setR03] = useState(0)
    const [r04, setR04] = useState(0)
    const [r05, setR05] = useState(0)

    const filterData = data.filter(item => item.split('::')[1] === 'Расход')
    useEffect(() => {
        for (let i = 0; i < filterData.length; i++) {
            if (filterData[i].split('::')[2] === 'Покупка продуктов') {
                setR01(prev => prev + +(filterData[i].split('::')[0]))
            }
            if (filterData[i].split('::')[2] === 'Покупка одежды') {
                setR02(prev => prev + +(filterData[i].split('::')[0]))
            }
            if (filterData[i].split('::')[2] === 'Оплата счетов') {
                setR03(prev => prev + +(filterData[i].split('::')[0]))
            }
            if (filterData[i].split('::')[2] === 'Развлечения') {
                setR04(prev => prev + +(filterData[i].split('::')[0]))
            }
            if (filterData[i].split('::')[2] === 'Путешествия') {
                setR05(prev => prev + +(filterData[i].split('::')[0]))
            }
        }
    }, [])

    return (
        <>
        {
            show &&
            <DataContainer style={{height: '500px'}}>
                <MyResponsivePie data={[
                    {
                        "id": "Покупка продуктов",
                        "label": "Покупка продуктов",
                        "value": r01,
                        "color": "hsl(163, 70%, 50%)"
                    },
                    {
                        "id": "Покупка одежды",
                        "label": "Покупка одежды",
                        "value": r02,
                        "color": "hsl(76, 70%, 50%)"
                    },
                    {
                        "id": "Оплата счетов",
                        "label": "Оплата счетов",
                        "value": r03,
                        "color": "hsl(250, 70%, 50%)"
                    },
                    {
                        "id": "Развлечения",
                        "label": "Развлечения",
                        "value": r04,
                        "color": "hsl(247, 70%, 50%)"
                    },
                    {
                        "id": "Путешествия",
                        "label": "Путешествия",
                        "value": r05,
                        "color": "hsl(329, 70%, 50%)"
                    }
                    ].filter(item => item.value > 0)}></MyResponsivePie>
            </DataContainer>
        }
        </>
    );
};

export default DataChart;
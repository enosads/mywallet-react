import React, {useEffect, useState} from 'react';
import {ResponsiveLine} from '@nivo/line';
import {useTransactions} from "../../hooks/useTransactions";

export function Line() {
    const [data, setData] = useState([]);
    const {transactions} = useTransactions();


    useEffect(() => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();
        let dataFounded = [];
        let filteredTransactionsBeforeMonth = transactions.filter(transaction =>
            !(new Date(transaction.date).getMonth() === month &&
                new Date(transaction.date).getFullYear() === year)
        );
        let beforeValue = filteredTransactionsBeforeMonth.reduce(
            (value, transaction) => value + transaction.value, 0);

        for (let i = 0; i < day; i++) {
            let filteredTransactions = transactions.filter(transaction =>
                new Date(transaction.date).getMonth() === month &&
                new Date(transaction.date).getFullYear() === year &&
                new Date(transaction.date).getDate() === i + 1
            );
            console.log(filteredTransactions);
            beforeValue = filteredTransactions.reduce(
                (value, transaction) => {
                    console.log(beforeValue);
                    console.log(transaction);
                    return value + transaction.value;
                }, beforeValue)
            dataFounded.push({
                x: i + 1,
                y: beforeValue
            })
        }
        setData([{
            id: 'total',
            data: dataFounded
        }]);
    }, [transactions])

    return (
        <ResponsiveLine
            data={data}
            margin={{top: 50, right: 110, bottom: 50, left: 60}}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: new Intl.DateTimeFormat(
                    'pt-BR', {
                        month: "long"
                    }
                ).format(new Date())
                ,
                legendOffset: 36,
                legendPosition: 'middle',
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Real',
                legendOffset: -40,
                legendPosition: 'middle',
                color: 'red'
            }}
            colors={{scheme: 'dark2'}}
            pointSize={10}
            pointColor={{theme: 'background'}}
            pointBorderWidth={2}
            pointBorderColor={{from: 'serieColor'}}
            pointLabelYOffset={-12}
            enableArea={true}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />);
}


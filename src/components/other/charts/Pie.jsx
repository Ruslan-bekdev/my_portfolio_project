import React from 'react';
import classes from './Charts.module.sass';
import {
    Chart,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import {Pie} from "react-chartjs-2";

Chart.register(
    ArcElement,
    Tooltip,
    Legend
);

const CustomPie = ({dataPercent}) => {
    const data = {
        datasets: [{
            data: dataPercent,
            backgroundColor: [
                '#34495e',
                '#ffa07a'
            ]
        }]
    };

    return (
        <div className={classes.pie}>
            <Pie data={data}/>
            <div>
                <div>
                    <b
                        style={{
                            color: '#ffa07a',
                            display: 'block'
                        }}
                    >
                        Верстка
                    </b>
                    <b
                        style={{
                            color: '#34495e',
                            display: 'block'
                        }}
                    >
                        Логика
                    </b>
                </div>
            </div>
        </div>
    );
};

export default CustomPie;
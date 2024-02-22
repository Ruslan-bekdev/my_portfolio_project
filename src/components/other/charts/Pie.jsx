import React from 'react';
import classes from './Charts.module.sass';
import {
    Chart,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import {Pie} from "react-chartjs-2";
import {useSelector} from "react-redux";

Chart.register(
    ArcElement,
    Tooltip,
    Legend
);

const CustomPie = ({dataPercent}) => {
    const {content} = useSelector(state => state.textReducer);
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
                        {
                            content.projects.pie[0]
                        }
                    </b>
                    <b
                        style={{
                            color: '#34495e',
                            display: 'block'
                        }}
                    >
                        {
                            content.projects.pie[1]
                        }
                    </b>
                </div>
            </div>
        </div>
    );
};

export default CustomPie;
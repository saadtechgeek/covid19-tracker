import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

export default function Chart() {
    const [dailyData,setDailyData] = useState({});
    //above is same as following in class base component
    // state= {
    //     dailyData: {}
    // }

    //useeffect accept callback
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        console.log(dailyData);
        fetchAPI();
    },[]);

    const lineChart = (
        dailyData[0]?
        <Line data={{
              labels: '',
              datasets: [{},{}]
            }}
        /> : null
    );

    return (
        <div>
            Chart
        </div>
    )
}

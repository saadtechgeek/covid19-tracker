import React from 'react';

//following line is change with below by adding value in index.js file
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker'


import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css'

// if only folder given it will automatically search index.js file
import { fetchData} from './api';

class App extends React.Component {
    state= {
        data:{},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
        //console.log(data);
    }


    render(){
        const {data} =this.state;

        return (<div className={styles.container}>
            <Cards  data={data}/>
            <CountryPicker/>
            <Chart/>
        </div>)
    }
}

export default App;
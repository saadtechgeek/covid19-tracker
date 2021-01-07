import React from 'react';

//following line is change with below by adding value in index.js file
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker'

import image from './images/image.png';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css'

// if only folder given it will automatically search index.js file
import { fetchData} from './api';

class App extends React.Component {
    state= {
        data:{},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
        //console.log(data);
    }


    handleCountryChange = async (country) => {
        console.log(country);
        const data = await fetchData(country);

        this.setState({ data, country: country });
        //fetch the data
    
        //set the state
      }


    render(){
        const {data,country} =this.state;

        return (<div className={styles.container}>
            <img className={styles.image} src={image} alt="COVID-19" />
            <Cards  data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country}/>
        </div>)
    }
}

export default App;
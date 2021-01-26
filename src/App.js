/* eslint-disable react/require-render-return */
import React from 'react';

//Instead of doing this: 
//import Cards from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import CountryPicker from './components/CountryPicker/CountryPicker';
//we did import the components like below mentions from the index.js file.

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.webp';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    } 

    render() {
        const { data, country } = this.state;

        return(
            <div className={styles.container}>
                <img src={coronaImage} alt="Covid-19" />
                <h3>REAL-TIME DATA</h3>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;
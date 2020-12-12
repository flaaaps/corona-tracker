import React, { useState, useEffect } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import cx from 'classnames';

import coronaImage from './images/image.png';

const App = () => {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);

    const handleCountryChange = async (newCountry) => {
        setLoading(true);
        console.log(newCountry, 'COUUUUUUUUUUUUNTRY');
        const fetchedData = await fetchData(newCountry);
        console.log(fetchedData, 'FETCHED DATA');
        setCountry(newCountry);
        console.log(newCountry, 'NEW COUNTRY');
        setData(fetchedData);
        console.log(country, 'SET COUNTRY', data);
        setLoading(false);
    };

    useEffect(() => {
        const fetchAPI = async () => {
            const fetchedData = await fetchData();
            setData(fetchedData);
            setLoading(false);
        };
        fetchAPI();
    }, []);
    return (
        <div className={styles.container}>
            <div className={cx(styles.loadingOverlay, loading ? styles.loading : null)}>
                <i className="fas fa-spinner"></i>
                <p>Loading...</p>
            </div>
            <img className={styles.image} src={coronaImage} alt="COVID-19" />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Cards data={data} />
            <Chart data={data} country={country} />
        </div>
    );
};

export default App;

import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

import axios from 'axios';
require('dotenv');

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    const [defaultCountry, setDefaultCountry] = useState('');
    useEffect(() => {
        const fetchApis = async () => {
            // console.log(ipLookup, 'IP LOOKUP');
            setFetchedCountries(await fetchCountries());
            if (process.env.NODE_ENV === 'production') {
                const { data } = await axios.get('https://ipwhois.app/json/');
                setDefaultCountry(data.country);
            }
        };

        fetchApis();
    }, [setFetchedCountries, handleCountryChange]);
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                {defaultCountry ? <option value={defaultCountry}>{defaultCountry}</option> : null}
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => (
                    <option key={i} value={country}>
                        {country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;

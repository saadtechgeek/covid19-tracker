import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

export default function CountryPicker() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
          setCountries(await fetchCountries());
        };
    
        fetchAPI();
      }, []);
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

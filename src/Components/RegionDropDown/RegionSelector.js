import React, { Component } from 'react';
import axios from 'axios';

class RegionSelector extends Component {
    getCountryResult = (event) => {
        let response;
        if(event.target.value === 'Global')
        response = axios.get('https://covid19.mathdro.id/api');
        else
        response = axios.get('https://covid19.mathdro.id/api/countries/' + event.target.value);
        response.then(res => {
            this.props.updateHandler(res.data.confirmed.value, res.data.recovered.value, res.data.deaths.value, res.data.lastUpdate);
        })
    }
    render () {
        return (
            <select value={this.value} onChange={this.getCountryResult}>
            {
                this.props.countryList.map((country, index) => {
                return <option key={index} value={country.iso3} >{country.name}</option>
                })
            }
        </select>
        );
    }
    
}

export default RegionSelector;
import React from 'react';
import ResultCard from '../ResultCard/ResultCard'
const Recovered = (props) => {
    return <ResultCard 
            title={props.title} 
            border={props.border} 
            count={props.count} 
            lastUpdate={props.lastUpdate} />
}

export default Recovered;
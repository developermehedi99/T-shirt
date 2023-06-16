import React, { useContext } from 'react';
import { RingContest } from '../Grandpa/Grandpa';

const Sister = () => {
    const ringku = useContext(RingContest);
    
    return (
        <div>
            <h3>sister</h3>
            <p><small>{ringku}</small></p>
        </div>
    );
};

export default Sister;
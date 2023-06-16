import React, { useContext } from 'react';
import { RingContest } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const angti = useContext(RingContest)
    return (
        <div>
            <h3>speciall</h3>
            <p><small>ring:{angti}</small></p>
        </div>
    );
};

export default Special;
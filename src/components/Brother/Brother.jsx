import React, { useContext } from 'react';
import { MoneyContest } from '../Grandpa/Grandpa';

const Brother = () => {
    const [money] = useContext(MoneyContest);
    return (
        <div>
            <h3>brother</h3>
            <p><small>grandpa money: {money}</small></p>
        </div>
    );
};

export default Brother;
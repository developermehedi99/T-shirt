import React, { useContext } from 'react';
import Cusin from '../Cusin/Cusin';
import { MoneyContest } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContest);
    return (
        <div>
            <h3>uncle</h3>
            <p><small>grandpa money: {money}</small></p>
            <button onClick={() =>setMoney(money + 100)}>sent 100tk</button>
            <section className='flex'>
                <Cusin>rana</Cusin>
                <Cusin>khan</Cusin>
            </section>
        </div>
    );
};

export default Uncle;
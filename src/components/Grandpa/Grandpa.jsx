import React, { createContext, useState } from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Uncty from '../Uncty/Uncty';

export const RingContest = createContext('gold');
export const MoneyContest = createContext(0);

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0);

    return (
        <div className='grandpa-all'>
            <h3>grandpa</h3>
            <p>Has money: {money}</p>
            <MoneyContest.Provider value={[money, setMoney]}>
                <RingContest.Provider value='golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Uncty></Uncty>
                    </section>
                </RingContest.Provider>
            </MoneyContest.Provider>
        </div>
    );
};

export default Grandpa;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../TShirt/Tshirt';

const Home = () => {
    const tshirts = useLoaderData();
    console.log(tshirts)
    return (
        <div>
            {
                tshirts.map(tshirt => <Tshirt
                tshirt={tshirt}
                key={tshirt.id}
                ></Tshirt>)
            }
        </div>
    );
};

export default Home;
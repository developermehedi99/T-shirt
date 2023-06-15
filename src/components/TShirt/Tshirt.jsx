import React from 'react';

const Tshirt = ({tshirt}) => {
    const {name, picture, price} = tshirt;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Tshirt;
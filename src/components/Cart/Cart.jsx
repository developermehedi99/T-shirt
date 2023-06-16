import React from 'react';
import Tshirt from '../TShirt/Tshirt';

const Cart = ({cart, handleRemoveFromCart}) => {

    let message;
    if(cart.length === 0){
        message = <p>'please add products.'</p>
    }
    else{
       message= <div>
            <h4>boroloxx re pagli</h4>
            <p>thanks for giving money.</p>
        </div>
    }

    return (
        <div>
            <h2>Order summary: {cart.length}</h2>
            {
                cart.length > 2 ? 'r kinis ne' : ' fokir'
            }
            {message}
           {
            cart.map(tshirt => <p key={tshirt._id}>{tshirt.name}
            <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
            </p>)
           }
        </div>
    );
};

export default Cart;
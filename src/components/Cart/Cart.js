import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart, randomItem, chooseAgain} = props;
    


    
    return (
        <div className='cart'>
            <h6>Display Outputs:</h6>
            {
                cart.map(product=> <CartChildren
                    product={product}
                    key={product.id}
                ></CartChildren>)
            }
            <div className='button-section'>
            <button onClick={()=>randomItem()}>
                <p>Choose One</p>
            </button>

            <button onClick={()=>chooseAgain()}>
                <p>Choose Again</p>
            </button>
            </div>
        </div>
    );
};

const CartChildren =({product})=>{
    const {name,img} =product;
    return(
        <div className='cart-info'>
            <img src={img} alt="" />
            <h1>Name: {name}</h1>
            <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
            
        </div>
    )
}

export default Cart;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {name, id, img, price} = props.product;
    return (
        
        <div className='product'>
            <img src={img} alt="" />
            
            <div className='product-info'>
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            </div>

            <button className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;
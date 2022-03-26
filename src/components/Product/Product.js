import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {name, id, img, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>

        </div>
    );
};

export default Product;
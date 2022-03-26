import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
   

    const randomItem =()=>{
        const random = cart[Math.floor(Math.random() * cart.length)];
        setCart([random])
    }
    
    const chooseAgain =()=>{
        setCart([])
    }

    
    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    const handleAddToCart = (product) =>{
        const useFind = cart.find(camera => 
            camera.id === product.id);
            if(!useFind){
                if(cart.length<4){
                    const newCart = [...cart, product]
                setCart(newCart)
                }
                else{
                    alert('You cannot added more than 4')
                }
            }
            else{
                alert("You cannot add the same item Twice")
            }
        }
        
        
    

    return (
        
        <div className='shop-container'>
            
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart ={handleAddToCart}
                    ></Product>)
                }

                
            </div>


            <div className="cart-container">
                
                <Cart chooseAgain={chooseAgain} randomItem={randomItem} cart={cart}></Cart>
                

                
            </div>

        </div>
    );
};

export default Shop;
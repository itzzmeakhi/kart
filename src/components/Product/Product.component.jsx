import React from 'react';

import './Product.styles.scss';

const Product = (props) => {
    console.log(props);
    return (
        <div className = 'product'>
            <div className = 'product__img'>
                <img src = {props.prodImg} alt = {props.prodName} />
            </div>
            <div className = 'product__desc'>
                <div className = 'product__details'>
                    <p> {props.prodName} </p>
                    <p className = 'price'> Rs. {props.prodPrice} </p>
                </div>
                <button
                    type = 'button'>
                        Add
                </button>
            </div>
        </div>
    )
}

export default Product;
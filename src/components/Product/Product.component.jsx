import React from 'react';
import { connect } from 'react-redux';

import { addToCart, removeFromCart } from './../../redux/cart/cart.actions';

import './Product.styles.scss';

const Product = ({ add, cartItems, remove, prodImg, prodName, prodPrice, prodId }) => {
    const productDetails = {
        prodId,
        prodName,
        prodImg,
        prodPrice
    }

    return (
        <div className = 'product'>
            <div className = 'product__img'>
                <img src = {prodImg} alt = {prodName} />
            </div>
            <div className = 'product__desc'>
                <div className = 'product__details'>
                    <p> {prodName} </p>
                    <p className = 'price'> Rs. {prodPrice} </p>
                </div>
                {cartItems.filter(itm => itm.prodId === prodId).length <= 0 ? (
                    <button
                        className = 'add__button'
                        onClick = {() => {
                            add(productDetails);
                        }}
                        type = 'button'>
                            Add
                    </button>
                ) : (
                    <button
                        className = 'remove__button'
                        onClick = {() => {
                            remove(prodId);
                        }}
                        type = 'button'>
                            Remove
                    </button>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (item) => dispatch(addToCart(item)),
        remove: (id) => dispatch(removeFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
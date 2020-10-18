import React from 'react';
import { connect } from 'react-redux';

import { addQuantity, removeQuantity } from './../../redux/cart/cart.actions';

import './CartItem.styles.scss';

const CartItem = ({ prodImg, prodName, prodId, prodPrice, prodQuan, icrQuan, dcrQuan }) => {
    return (
        <div className = 'cart__item'>
            <div className = 'cart__img'>
                <img src = {prodImg} alt = {prodName} />
            </div>
            <div className = 'cart__desc'>
                <p>{prodName.slice(0, 20) + '...'}</p>
                <p> {prodQuan} x Rs. {prodPrice} = Rs. {prodQuan * prodPrice}</p>
                <div className = 'btn__grp'>
                    <button
                        className = 'add__button'
                        onClick = {() => icrQuan(prodId)}>+</button>
                    <button
                        className = 'remove__button'
                        onClick = {() => dcrQuan(prodId)}>-</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        icrQuan: (id) => dispatch(addQuantity(id)),
        dcrQuan: (id) => dispatch(removeQuantity(id))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);
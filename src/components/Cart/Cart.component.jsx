import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CartItem from './../CartItem/CartItem.component';
import { placeAnOrderStart } from './../../redux/user/user.actions';

import './Cart.styles.scss';

const Cart = ({ cartItems, totalPrice, placeOrder }) => {
    const history = useHistory();
    return (
        <div className = 'cart'>
            {cartItems.length > 0 ? 
                <React.Fragment>
                    {
                        cartItems.map(cartItem => {
                            return (
                                <CartItem key = {cartItem.prodId} {...cartItem} />
                            )
                        })
                    }
                    <p> Total Price: {totalPrice} </p>
                    <button
                        className = 'place__order'
                        onClick = {async () => { 
                            await placeOrder(cartItems);
                            history.push('/orders');
                        }}
                        type = 'button'>
                            Order Now
                    </button>
                </React.Fragment>
                : (
                    <p className = 'alert'> No items in the cart </p>
                ) }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        totalPrice: state.cart.cartItems
                        .reduce((acc, itm) => { return acc + itm.prodQuan * itm.prodPrice }, 0)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        placeOrder: (orderDetails) => dispatch(placeAnOrderStart(orderDetails))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
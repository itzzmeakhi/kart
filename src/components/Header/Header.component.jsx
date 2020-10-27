import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useHistory } from 'react-router-dom';

import Cart from './../Cart/Cart.component';
import { signOutStart } from './../../redux/user/user.actions';

import './Header.styles.scss';

export const Header = ({ noOfItemsInCart, loggedInUser, signOut }) => {
    const [isUserDropDownVisible, setUserDropDownVisibility] = useState(false);
    const [isCartDropDownVisible, setCartDropDownVisibility] = useState(false);
    const history = useHistory();
    return (
        <header className = 'header' id = 'header'>
            <NavLink to = '/'><p className = 'title'>Kart</p></NavLink>
            {loggedInUser ? (
                <div className = 'header__options' id = 'header__options'>
                    <div className = 'cart__options'>
                        <FontAwesomeIcon 
                            icon={faShoppingCart} 
                            onClick = {() => {
                                setUserDropDownVisibility(false);
                                setCartDropDownVisibility(prevState => {return !prevState})}
                            } />
                        <span><sup>{noOfItemsInCart}</sup></span>
                        {isCartDropDownVisible ? (
                            <div className="dropdown">
                                <Cart />
                            </div> 
                        ) : null} 
                    </div>
                    <div className = 'user__options'>
                        <FontAwesomeIcon 
                            icon={faUser} 
                            onClick = {() => {
                                setCartDropDownVisibility(false);
                                setUserDropDownVisibility(prevState => {return !prevState})}
                            } />
                        {isUserDropDownVisible ? (
                            <div className="dropdown" onClick = {() => setUserDropDownVisibility(false)}>
                                <NavLink to = '/orders'>My Orders</NavLink>
                                <span onClick = { async () => { 
                                    await signOut(); 
                                    history.push('/auth');
                                } }>Logout</span>
                            </div> 
                        ) : null} 
                    </div>
                </div>
            ) : null}
        </header>
    )
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser,
        noOfItemsInCart: state.cart.noOfItemsInCart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOutStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
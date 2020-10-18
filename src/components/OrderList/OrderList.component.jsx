import React from 'react';
import { connect } from 'react-redux';

import Order from './../Order/Order.component';

import './OrderList.styles.scss';

const OrderList = ({ userOrders }) => {
    return(
        <div className = 'order__list'>
            {userOrders.map((ord, index) => {
                return <Order key = {`order${index}`} orderData = {ord} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userOrders: state.user.loggedInUser.userOrders
    }
}

export default connect(mapStateToProps)(OrderList);
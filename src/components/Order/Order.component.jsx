import React from 'react';

import './Order.styles.scss';

const Order = ({ orderData }) => {
    const { items, placedOn } = orderData;
    const itemsKeys = Object.keys(items)
    return (
        <div className = 'order__card'>
            <div className = 'order__items'>
                {itemsKeys.map((item, index) => {
                    return <p key = {index}> {items[item].prodName} - {items[item].prodQuan} x Rs. {items[item].prodPrice} </p>
                })}
            </div>
            <div className = 'order__desc'>
                <p> Amount Paid: Rs. {orderData.amountPaid} </p>
                <p> Placed on: {placedOn}</p>
            </div>
        </div>
    )
}

export default Order;
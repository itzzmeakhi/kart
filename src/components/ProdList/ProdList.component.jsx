import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAllProductsStart } from './../../redux/products/products.actions';
import Product from './../Product/Product.component';

import './ProdList.styles.scss';

const ProdList = ({ fetchProducts, products }) => {
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])
    return (
        <div className = 'prodlist'>
            {products && products.map(prod => {
                return <Product
                            key = {prod.prodId}
                            prodId = {prod.prodId}
                            prodName = {prod.prodName}
                            prodImg = {prod.prodImg}
                            prodPrice = {prod.prodPrice} />;
            })}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(getAllProductsStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProdList);
import React from 'react';
import { Link } from 'react-router';
import products from '../data/products.json'
import NotFoundPage from './NotFoundPage';

export default class ProductDetailPage extends React.Component {
    constructor (){
        super();
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart() {
        const productId = this.props.params.id;
        this.props.handleAddToCart(productId);
    }

    render() {
        const productId = this.props.params.id;
        const product = products.products.filter((product) => product.image.startsWith(productId))[0];
        const imgUrl = require(`../static/img/${product.image}`);
        if (!product) {
            return <NotFoundPage />;
        }
        return (
            <div className="product-details">
                <h2 className="name">{product.name}</h2>
                <img src={imgUrl} alt="img not available"/>
                <h3 className="measurement">{product.measurement}</h3>
                <h3 className="price">${product.price}</h3>
                <p className="desc">{product.desc}</p>
                <button className="btn-cart btn-large" onClick={this.addToCart}>Add To Cart </button>
                </div>
        );
    }
}

import React from 'react';
import { Link } from 'react-router';

export default class ProductPreview extends React.Component {

  addToCart() {
      this.props.handleAddToCart(this.id);
  }

  render() {
    let {image, name, measurement, price} = this.props;
    const imgUrl = require(`../static/img/${image}`);
    const id = image.split('.')[0];
    this.id = id;
    return (
        <div className="product-preview">
            <Link to={`/product/${id}`}>
            <img src={imgUrl} alt="img not available"/>
            <h3 className="name">{name}</h3>
            </Link>
            <p className="measurement">{measurement}</p>
            <p className="price">${price}</p>
            <button className="btn-cart" onClick={this.addToCart.bind(this)}>Add To Cart </button>
            </div>
    );
  }
}

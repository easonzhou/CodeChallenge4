import React, {Component} from 'react';
import ProductPreview from './ProductPreview';
import products from '../data/products';

export default class CartPage extends Component {
    
  handleAddToCart(productId) {
      this.props.handleAddToCart(productId);
  }

  render() {
      const productIds = this.props.carts;
      const productsInCart = products.products.filter((product) => {
          const productId = product.image.split('.')[0];
          return productIds.includes(productId);
      });

      return (
          <div className="home">
              <div className="products-selector">
              {productsInCart.map(productData => <ProductPreview key={productData.image.split('.')[0]} {...productData} handleAddToCart={this.handleAddToCart.bind(this)} />)}
              </div>
          </div>
      );
  }
}

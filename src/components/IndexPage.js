import React, {Component} from 'react';
import ProductPreview from './ProductPreview';
import products from '../data/products';
import Checkbox from './Checkbox';
import "../static/css/style.css";

export default class IndexPage extends Component {
    constructor() {
        super();
        this.state = {products: products.products};
    }

  componentWillMount = () => {
    this.selectedBrands = new Set();
      for(let brand of products.filters[0].values) {
          this.selectedBrands.add(brand);
      }
    this.selectedPrices = new Set();
      for(let price of products.filters[1].values) {
          this.selectedPrices.add(price);
      }
  }

    filterByFilters = () => {
        let prds = products.products.filter(product => this.selectedBrands.has(product.brand));
        prds = prds.filter(product => {
            let price = product.price;
            for(let range of this.selectedPrices) {
                let ranges = range.split('-');
                if(price >= parseInt(ranges[0]) && price <= parseFloat(ranges[1])) {
                    return true;
                }
            }
            return false;
        });
        this.setState({products: prds});
    }
    
  toggleBrandCheckboxes = label => {
    if (this.selectedBrands.has(label)) {
      this.selectedBrands.delete(label);
    } else {
      this.selectedBrands.add(label);
    }
    this.filterByFilters();
  }
    
  togglePriceCheckboxes = label => {
    if (this.selectedPrices.has(label)) {
      this.selectedPrices.delete(label);
    } else {
      this.selectedPrices.add(label);
    }
    this.filterByFilters();
  }

  createBrandCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleBrandCheckboxes}
      key={label}
    />
  )

  createPriceCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.togglePriceCheckboxes}
      key={label}
    />
  )
    createBrandCheckboxes = () => (
        products.filters[0].values.map(this.createBrandCheckbox)
    )
    createPriceCheckboxes = () => (
        products.filters[1].values.map(this.createPriceCheckbox)
    )

    handleAddToCart(productId) {
        this.props.handleAddToCart(productId);
    }
    
  render() {
      return (
          <div className="master">
              <div className="product-filter">
                <div className="filter-name">
                    {products.filters[0].name.toUpperCase()}
                </div>
                <div className="checkboxes">
                    {this.createBrandCheckboxes()}
                </div>
                <div className="filter-name">
                    {products.filters[1].name.toUpperCase()}
                </div>
                <div className="checkboxes">
                    {this.createPriceCheckboxes()}
                </div>
              </div>
              <div className="products-selector">
              {this.state.products.map(productData => <ProductPreview key={productData.image.split('.')[0]} {...productData} handleAddToCart={this.handleAddToCart.bind(this)} />)}
              </div>
          </div>
      );
  }
}

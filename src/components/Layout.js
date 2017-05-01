import React from 'react';
import { Link } from 'react-router';
import logo from '../logo.svg';

export default class Layout extends React.Component { constructor(props) {
        super(props);
        this.state = {carts: []};
    }

    handleAddToCart = (productId) => {
        const carts = this.state.carts;
        if(!carts.includes(productId)) {
            this.setState({carts: carts.concat(productId)});
        }
        console.log(carts);
    }

    render() {
        return (
            <div className="app-container">
                <header>
                    <Link to="/">
                        <span className="logo">Shop Me</span>
                    </Link>
                    <Link to="/cart">
                        <span className="cart">My Cart</span>
                    </Link>
                </header>
                <div className="app-content">
                    {React.cloneElement(this.props.children, {
                        carts: this.state.carts,
                        handleAddToCart: this.handleAddToCart
                    })}
                </div>
            </div>
        );
    }
}

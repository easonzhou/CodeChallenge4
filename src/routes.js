import React from 'react'
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import ProductDetailPage from './components/ProductDetailPage';
import CartPage from './components/CartPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="product/:id" component={ProductDetailPage}/>
    <Route path="cart" component={CartPage}/>
  </Route>
);

export default routes;

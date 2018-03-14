import React, {Component} from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import BlocksPage from '../pages/BlocksPage'
import ItemsPage from '../pages/ItemsPage'
import ShoppingCart from '../pages/ShoppingCart'
import HomePage from '../pages/HomePage'
import SignUpPage from '../pages/SignUpPage'
import ForgotPW from '../pages/ForgotPW'
import SignInPage from '../pages/SignInPage'
import CreateBlock from '../pages/CreateBlock'
import CreateReview from '../pages/CreateReview'
import ReviewsPage from '../pages/ReviewsPage'

export default class extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/blocks" component={BlocksPage} />
          <Route path="/reviews" component={ReviewsPage} />
          <Route path="/shop" component={ItemsPage} />
          <Route path="/createBlock" component={CreateBlock} />
          <Route path="/createReview" component={CreateReview} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/signUp" component={SignUpPage} />
          <Route path="/forgotPW" component={ForgotPW} />
          <Route path="/cart" component={ShoppingCart} />
        </Switch>
      </div>
    );
  }
}

import React, {Component} from 'react'
import {
  NavLink,
  Link,
} from 'react-router-dom'

export default class extends Component {
  render() {
    return(
      <React.Fragment>
        <nav className="pa3 pa4-ns">
          <NavLink
            className="link dim f6 f5-ns dib mr3 black"
            activeClassName="gray"
            exact={true}
            to="/"
            title="Home"
          >
            Home
          </NavLink>
          <NavLink
            className="link dim f6 f5-ns dib mr3 black"
            activeClassName="gray"
            exact={true}
            to="/shop"
            title="Home"
          >
            Shop
          </NavLink>
          <NavLink
            className="link dim f6 f5-ns dib mr3 black"
            activeClassName="gray"
            exact={true}
            to="/blocks"
            title="Feed"
          >
            Blocks
          </NavLink>
          <NavLink
            className="link dim f6 f5-ns dib mr3 black"
            activeClassName="gray"
            exact={true}
            to="/reviews"
            title="Feed"
          >
            Reviews
          </NavLink>
          <Link
            to="/signIn"
            className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
          >
            Sign In
          </Link>
          <Link
            to="/signUp"
            className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
          >
            Sign Up
          </Link>
          <Link
            to="/cart"
            className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
          >
            Shopping Cart
          </Link>
          <Link
            to="/createBlock"
            className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
          >
            + Create Block
          </Link>
          <Link
            to="/createReview"
            className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
          >
            Write A Review
          </Link>
        </nav>
        <div className="fl w-100 pl4 pr4">
        
        </div>
      </React.Fragment>
    );
  }
}

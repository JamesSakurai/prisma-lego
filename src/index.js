import React from 'react'
import ReactDOM from 'react-dom'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import AppBar from 'material-ui/AppBar'

// import FeedPage from './components/FeedPage'
// import DraftsPage from './components/DraftsPage'
// import CreatePage from './components/CreatePage'
// import DetailPage from './components/DetailPage'
import BlocksPage from './components/BlocksPage'
import ItemsPage from './components/ItemsPage'
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage'
import CreateBlock from './components/CreateBlock'
import ForgotPW from './components/ForgotPW'
import HomePage from './components/HomePage'
import ShoppingCart from './components/ShoppingCart'

import 'tachyons'
import './index.css'

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
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
        </nav>
        <div className="fl w-100 pl4 pr4">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/blocks" component={BlocksPage} />
            <Route path="/shop" component={ItemsPage} />
            <Route path="/createBlock" component={CreateBlock} />
            <Route path="/signIn" component={SignInPage} />
            <Route path="/signUp" component={SignUpPage} />
            <Route path="/forgotPW" component={ForgotPW} />
            <Route path="/cart" component={ShoppingCart} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)

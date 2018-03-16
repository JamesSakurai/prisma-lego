import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
// import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import IconButton from 'material-ui/IconButton'


import Nav from './components/helpers/nav'
import Routes from './components/helpers/routes'

import 'tachyons'
import './index.css'

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

const App =() => (
  <div>
    <Router>
      <MuiThemeProvider>
      {/*<AppBar title="Menu"/>*/}
      <div>
        <Nav/>
        <Routes/>
      </div>
      </MuiThemeProvider>
    </Router>
  </div>
)


ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root'),
)

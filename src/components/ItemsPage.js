import React from 'react'
import Block from '../components/Block'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ItemsPage extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.itemsQuery.refetch()
    }
  }
  
  render() {
    if (this.props.itemsQuery.loading) {
      return (
        <div className="flex w-100 h-100 items-center justify-center pt7">
          <div>Loading (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})</div>
        </div>
      )
    }
    
    return (
      <React.Fragment>
        <h1>Items</h1>
        <main className="flex-container">
          <section className="flex-item">1</section>
          <section className="flex-item">2</section>
          <section className="flex-item">3</section>
          <section className="flex-item">4</section>
          <section className="flex-item">5</section>
          <section className="flex-item">6</section>
          <section className="flex-item">7</section>
          <section className="flex-item">8</section>
          <section className="flex-item">9</section>
        </main>
      </React.Fragment>
    )
  }
}

const ITEMS_QUERY = gql`
  query ItemsQuery {
    Items {
      id
      size
      color
      price
    }
  }
`

export default graphql(ITEMS_QUERY, {
  name: 'itemsQuery', // name of the injected prop: this.props.feedQuery...
  options: {
    fetchPolicy: 'network-only',
  },
})(ItemsPage)

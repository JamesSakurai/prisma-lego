import React from 'react'
import Block from '../components/Block'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class BlocksPage extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.blocksQuery.refetch()
    }
  }
  
  render() {
    if (this.props.blocksQuery.loading) {
      return (
        <div className="flex w-100 h-100 items-center justify-center pt7">
          <div>Loading (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})</div>
        </div>
      )
    }
    
    return (
      <React.Fragment>
        <h1>Blocks</h1>
        {this.props.blocksQuery.blocks &&
        this.props.blocksQuery.blocks.map(block => (
          <Block
            key={block.id}
            block={block}
            refresh={() => this.props.blocksQuery.refetch()}
          />
        ))}
        {this.props.children}
      </React.Fragment>
    )
  }
}

const BLOCKS_QUERY = gql`
  query BlocksQuery {
    blocks {
      id
      size
      color
      price
    }
  }
`

export default graphql(BLOCKS_QUERY, {
  name: 'blocksQuery', // name of the injected prop: this.props.feedQuery...
  options: {
    fetchPolicy: 'network-only',
  },
})(BlocksPage)

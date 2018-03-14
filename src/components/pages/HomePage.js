import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class HomePage extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.feedQuery.refetch()
    }
  }
  
  render() {
    if (this.props.feedQuery.loading) {
      return (
        <div className="flex w-100 h-100 items-center justify-center pt7">
          <div>Loading (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})</div>
        </div>
      )
    }
    
    return (
      <React.Fragment>
        <h1>Welcome To The Lego Block Store</h1>
        <img src="https://media.wired.com/photos/5954a0cb8e8cc150fa8ec6e7/master/w_582,c_limit/HighRes_LEGO_DUPLO_bricks-story.jpg" alt="Lego Blocks"/>
        <h2>We've Got Blocks on Blocks!!!</h2>
      </React.Fragment>
    )
  }
}

const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      id
      text
      title
      isPublished
    }
  }
`

export default graphql(FEED_QUERY, {
  name: 'feedQuery', // name of the injected prop: this.props.feedQuery...
  options: {
    fetchPolicy: 'network-only',
  },
})(HomePage)

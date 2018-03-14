import React from 'react'
import Review from './Review'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ReviewsPage extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.reviewsQuery.refetch()
    }
  }
  
  render() {
    if (this.props.reviewsQuery.loading) {
      return (
        <div className="flex w-100 h-100 items-center justify-center pt7">
          <div>Loading (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})</div>
        </div>
      )
    }
    
    return (
      <React.Fragment>
        <h1>Reviews</h1>
        {this.props.reviewsQuery.reviews &&
        this.props.reviewsQuery.reviews.map(review => (
          <Review
            key={review.id}
            review={review}
            refresh={() => this.props.reviewsQuery.refetch()}
          />
        ))}
        {this.props.children}
      </React.Fragment>
    )
  }
}

const REVIEWS_QUERY = gql`
  query ReviewsQuery {
    reviews {
      id
      username
      product
      comment
    }
  }
`

export default graphql(REVIEWS_QUERY, {
  name: 'reviewsQuery', // name of the injected prop: this.props.feedQuery...
  options: {
    fetchPolicy: 'network-only',
  },
})(ReviewsPage)

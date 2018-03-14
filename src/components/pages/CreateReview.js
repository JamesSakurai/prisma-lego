import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class CreateReview extends React.Component {
  state = {
    username: '',
    product: '',
    comment: '',
  }
  
  render() {
    return (
      <div className="pa4 flex justify-center bg-white">
        <form onSubmit={this.handlePost}>
          <h1>Write A Review</h1>
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ username: e.target.value })}
            placeholder="Username"
            type="text"
            value={this.state.username}
          />
          <input
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ product: e.target.value })}
            placeholder="Product"
            type="Int"
            value={this.state.product}
          />
          <textarea
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ comment: e.target.value })}
            placeholder="Write A Review"
            type="text"
            value={this.state.comment}
          />
          <input
            className={`pa3 bg-black-10 bn ${this.state.username &&
            this.state.product && this.state.comment &&
            'dim pointer'}`}
            disabled={!this.state.username || !this.state.product || !this.state.comment}
            type="submit"
            value="Submit"
          />{' '}
          <a className="f6 pointer" onClick={this.props.history.goBack}>
            or cancel
          </a>
        </form>
      </div>
    )
  }
  
  handlePost = async e => {
    e.preventDefault()
    const { username, product, comment } = this.state
    await this.props.createReviewMutation({
      variables: { username, product, comment },
    })
    this.props.history.replace('/reviews')
  }
}

const CREATE_REVIEW_MUTATION = gql`
  mutation CreateReviewMutation($username: String!, $product: String! $comment: String!) {
    createReview(username: $username, product: $product comment: $comment) {
      id
      username
      product
      comment
    }
  }
`

const CreateReviewWithMutation = graphql(CREATE_REVIEW_MUTATION, {
  name: 'createReviewMutation', // name of the injected prop: this.props.createDraftMutation...
})(CreateReview)

export default withRouter(CreateReviewWithMutation)

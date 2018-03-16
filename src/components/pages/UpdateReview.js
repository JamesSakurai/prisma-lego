import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class UpdateReview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: props.review.username,
      product: props.review.product,
      comment: props.review.comment,
    }
  }
  
  render() {
    const handleSubmit = async (e) => {
      e.preventDefault()
      await this.props.mutate({
        variables: {
          username: this.state.username,
          product: this.state.product,
          comment: this.state.comment
        }
      })
      window.location.replace('/reviews')
    }
    return (
      <form className="flexBox"
            onSubmit={handleSubmit}>
        <h3>Update Review</h3>
        <TextField floatingLabelText="username"
                   value={this.state.username}
                   onChange={e => this.setState({ username: e.target.value })}
        />
        <TextField floatingLabelText="product"
                   value={this.state.product}
                   onChange={e => this.setState({ product: e.target.value })}
        />
        <TextField floatingLabelText="comment"
                   value={this.state.comment}
                   onChange={e => this.setState({ comment: e.target.value })}
        />
        <RaisedButton label="Confirm"
                      type="submit"
        />
      </form>
    );
  }
}

const UPDATE_REVIEW_MUTATION = gql`
  mutation($id: ID!, $username:String, $product:String, $comment:String){
    updateReview(
      id: $id,
      username: $username,
      product: $product,
      comment: $comment
    ){
      id
    }
  }
`
export default graphql(UPDATE_REVIEW_MUTATION,
  { options:(props) => ( {variables: {id: props.review.id}})}
)(UpdateReview)

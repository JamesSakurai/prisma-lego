import React, { Component } from 'react'
import UpdateReview from './UpdateReview'
import RaisedButton from 'material-ui/RaisedButton'
import {ModalButton} from '../helpers/buttons'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo/index'

class Review extends Component {
  render() {
    const review = this.props.review
    const DeleteReview = () => (
      <RaisedButton label="Confirm Delete"
                    onClick={handleClick}
      />
    )
    const handleClick = async (e) => {
      e.preventDefault()
      await this.props.mutate()
      window.location.replace('/blocks')
    }
    return(
      <div>
        <h4>Username: {review.username}</h4>
        <h4>Product: {review.product}</h4>
        <h4>Review: {review.comment}</h4>
        <ModalButton label="Update" display={<UpdateReview review={review}/>}/>
        <ModalButton label="Delete" display={DeleteReview()} color="secondary"/>
        <hr/>
      </div>
    );
  }
}

const DELETE_REVIEW_MUTATION = gql`
  mutation($id: ID!) {
    deleteReview(
      id: $id
    ){
      id
    }
  }
`

export default graphql(DELETE_REVIEW_MUTATION,
  {options: (props) => ({variables: {id: props.review.id}})}
)(Review)


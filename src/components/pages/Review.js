import React, { Component } from 'react'

export default class extends Component {
  render() {
    const review = this.props.review
    return(
      <div>
        <h4>Username: {review.username}</h4>
        <h4>Product: {review.product}</h4>
        <h4>Review:{review.comment}</h4>
        <hr/>
      </div>
    );
  }
}

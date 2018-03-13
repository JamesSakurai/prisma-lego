import React, { Component } from 'react'

export default class extends Component {
  render() {
    const block = this.props.block
    return(
      <div>
        <h4>Size: {block.size}</h4>
          <h4>Color: {block.color}</h4>
          <h4>${block.price}</h4>
        <hr/>
      </div>
    );
  }
}

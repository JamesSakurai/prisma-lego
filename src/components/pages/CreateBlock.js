import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import '../styles/HomePage.css'

class CreateBlock extends React.Component {
  state = {
    size: '',
    color: '',
    price: '',
  }
  
  render() {
    return (
      <div className="pa4 flex justify-center bg-white">
        <form className="flexBox" onSubmit={this.handlePost}>
          <h1>Create Block</h1>
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ size: e.target.value })}
            placeholder="Size"
            type="text"
            value={this.state.size}
          />
          <input
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ color: e.target.value })}
            placeholder="Color"
            type="Int"
            value={this.state.color}
          />
          <input
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ price: e.target.value })}
            placeholder="Price"
            type="text"
            value={this.state.price}
          />
          <input
            className={`pa3 bg-black-10 bn ${this.state.size &&
            this.state.color && this.state.price &&
            'dim pointer'}`}
            disabled={!this.state.size || !this.state.color || !this.state.price}
            type="submit"
            value="Create"
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
    const { size, color, price } = this.state
    await this.props.createBlockMutation({
      variables: { size, color, price },
    })
    this.props.history.replace('/blocks')
  }
}

const CREATE_BLOCK_MUTATION = gql`
  mutation CreateBlockMutation($size: String!, $color: String! $price: String!) {
    createBlock(size: $size, color: $color price: $price) {
      id
      size
      color
      price
    }
  }
`

const CreateBlockWithMutation = graphql(CREATE_BLOCK_MUTATION, {
  name: 'createBlockMutation', // name of the injected prop: this.props.createDraftMutation...
})(CreateBlock)

export default withRouter(CreateBlockWithMutation)

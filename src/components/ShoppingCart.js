import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ShoppingCartPage extends React.Component {
  state = {
    email: '',
    password: '',
  }
  
  render() {
    return (
      <div className="pa4 flex justify-center bg-white">
        <h1>Shopping Cart</h1>
      </div>
    )
  }
}

const CREATE_SHOPPINGCART_MUTATION = gql`
  mutation CreateShoppingCartMutation($size: String!, $color: String!) {
    createBlock(size: $size, color: $color) {
      id
      email
      password
    }
  }
`

const CreateShoppingCartWithMutation = graphql(CREATE_SHOPPINGCART_MUTATION, {
  name: 'createBlockMutation', // name of the injected prop: this.props.createDraftMutation...
})(ShoppingCartPage)

export default withRouter(CreateShoppingCartWithMutation)

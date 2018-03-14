import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ForgotPW extends React.Component {
  state = {
    email: '',
    confirmEmail: '',
  }
  
  render() {
    return (
      <div className="pa4 flex justify-center bg-white">
        <form onSubmit={this.handlePost}>
          <h1>Forgot Password?</h1>
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="Email..."
            type="text"
            value={this.state.email}
          />
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ confirmEmail: e.target.value })}
            placeholder="Confirm Email..."
            type="text"
            value={this.state.confirmEmail}
          />
          <input
            className={`pa3 bg-black-10 bn ${this.state.email &&
            this.state.confirmEmail &&
            'dim pointer'}`}
            disabled={!this.state.email || !this.state.confirmEmail}
            type="submit"
            value="Send Reset Email"
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
    const { email, confirmEmail } = this.state
    await this.props.createForgotPWMutation({
      variables: { email, confirmEmail },
    })
    this.props.history.replace('/forgotPW')
  }
}

const CREATE_FORGOTPW_MUTATION = gql`
  mutation CreateBlockMutation($size: String!, $color: String!) {
    createBlock(size: $size, color: $color) {
      id
      email
      confirmEmail
    }
  }
`

const CreateForgotPWWithMutation = graphql(CREATE_FORGOTPW_MUTATION, {
  name: 'createBlockMutation', // name of the injected prop: this.props.createDraftMutation...
})(ForgotPW)

export default withRouter(CreateForgotPWWithMutation)

import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class SignUpPage extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  
  render() {
    return (
      <div className="pa4 flex justify-center bg-white">
        <form onSubmit={this.handlePost}>
          <h1>Create An Account</h1>
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="Name..."
            type="text"
            value={this.state.name}
          />
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
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="Password..."
            type="text"
            value={this.state.password}
          /><input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ confirmPassword: e.target.value })}
            placeholder="Confirm Password..."
            type="text"
            value={this.state.confirmPassword}
          />
          <input
            className={`pa3 bg-black-10 bn ${this.state.email &&
            this.state.password &&
            'dim pointer'}`}
            disabled={!this.state.email || !this.state.password}
            type="submit"
            value="Sign In"
          />{' '}
        </form>
      </div>
    )
  }
  
  handlePost = async e => {
    e.preventDefault()
    const { email, password } = this.state
    await this.props.createSignInMutation({
      variables: { email, password },
    })
    this.props.history.replace('/signUpPage')
  }
}

const CREATE_SIGNUP_MUTATION = gql`
  mutation CreateBlockMutation($name: String!, $email: String!, $password: String!, $confirmPassword: String!, ) {
    createBlock(name: $name, email: $email, password: $password, confirmPassword: $confirmPassword) {
      id
      name
      email
      password
      confirmPassword
    }
  }
`

const CreateSignUpWithMutation = graphql(CREATE_SIGNUP_MUTATION, {
  name: 'createSignUpMutation', // name of the injected prop: this.props.createDraftMutation...
})(SignUpPage)

export default withRouter(CreateSignUpWithMutation)

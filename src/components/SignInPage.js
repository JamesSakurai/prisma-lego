import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

class SignInPage extends React.Component {
  state = {
    email: '',
    password: '',
  }
  
  render() {
    return (
      <div className="pa4 flex justify-center bg-white">
        <form onSubmit={this.handlePost}>
          <h1>Sign In</h1>
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
          />
          <input
            className={`pa3 bg-black-10 bn ${this.state.email &&
            this.state.password &&
            'dim pointer'}`}
            disabled={!this.state.email || !this.state.password}
            type="submit"
            value="Sign In"
          />{' '}
          <Link
            to="/forgotPW"
            className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
          >
            Forgot Password
          </Link>
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
    this.props.history.replace('/signInPage')
  }
}

const CREATE_SIGNIN_MUTATION = gql`
  mutation CreateBlockMutation($size: String!, $color: String!) {
    createBlock(size: $size, color: $color) {
      id
      email
      password
    }
  }
`

const CreateSignInWithMutation = graphql(CREATE_SIGNIN_MUTATION, {
  name: 'createBlockMutation', // name of the injected prop: this.props.createDraftMutation...
})(SignInPage)

export default withRouter(CreateSignInWithMutation)

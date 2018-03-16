import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import '../styles/HomePage.css'

class UpdateBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: props.block.size,
      color: props.block.color,
      price: props.block.price,
    }
  }
  
  render() {
    const handleSubmit = async (e) => {
      e.preventDefault()
      await this.props.mutate({
        variables: {
          size: this.state.size,
          color: this.state.color,
          price: this.state.price
        }
      })
      window.location.replace('/blocks')
    }
    return (
      <form className="flexBox"
            onSubmit={handleSubmit}>
        <h3>Update Block</h3>
        <TextField floatingLabelText="Size"
                   value={this.state.size}
                   onChange={e => this.setState({ size: e.target.value })}
        />
        <TextField floatingLabelText="Color"
                   value={this.state.color}
                   onChange={e => this.setState({ color: e.target.value })}
        />
        <TextField floatingLabelText="Price"
                   value={this.state.price}
                   onChange={e => this.setState({ price: e.target.value })}
                   type="number"
                   min="0.00"
                   step="0.01"
                   max="30"
        />
        <RaisedButton label="Confirm"
                      type="submit"
        />
      </form>
    );
  }
}

const UPDATE_BLOCK_MUTATION = gql`
  mutation($id: ID!, $size:String, $color:String, $price:String){
    updateBlock(
      id: $id,
      size: $size,
      color: $color,
      price: $price
    ){
      id
    }
  }
`
export default graphql(UPDATE_BLOCK_MUTATION,
  { options:(props) => ( {variables: {id: props.block.id}})}
)(UpdateBlock)

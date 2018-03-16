import React, { Component } from 'react'
import UpdateBlock from './UpdateBlock'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import RaisedButton from 'material-ui/RaisedButton'
import {ModalButton} from '../helpers/buttons'

class Block extends Component {
  render() {
    const block = this.props.block
    const DeleteBlock = () => (
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
        <h4>Size: {block.size}</h4>
          <h4>Color: {block.color}</h4>
          <h4>${block.price}</h4>
        <ModalButton label="Update" display={<UpdateBlock block={block}/>}/>
        <ModalButton label="Delete" display={DeleteBlock()} color="secondary"/>
        <hr/>
      </div>
    );
  }
}

const DELETE_BLOCK_MUTATION = gql`
  mutation($id: ID!) {
    deleteBlock(
      id: $id
    ){
      id
    }
  }
`

export default graphql(DELETE_BLOCK_MUTATION,
  {options: (props) => ({variables: {id: props.block.id}})}
)(Block)


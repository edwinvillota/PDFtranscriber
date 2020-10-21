import React from 'react'
import { Container, Color, Name, DeleteBtn } from './styles'
import PropTypes from 'prop-types'
import { FiDelete } from 'react-icons/fi'

export const ReadingArea = ({ color, name, handleDeleteArea }) => (
  <Container>
    <Color color={color} />
    <Name> {name} </Name>
    <DeleteBtn onClick={() => handleDeleteArea({ color, name })}>
      <FiDelete size={20}/>
    </DeleteBtn>
  </Container>
)

ReadingArea.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleDeleteArea: PropTypes.func.isRequired
}

import React from 'react'
import PropTypes from 'prop-types'
import { Li } from './styles'

export const PreviewDataArea = ({ name, text }) => (
  <Li><b>{name}</b>: {text}</Li>
)

PreviewDataArea.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

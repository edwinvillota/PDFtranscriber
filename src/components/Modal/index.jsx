import React from 'react'
import { createPortal } from 'react-dom'
import { Overlay, Container } from './styles'

const modalRoot = document.getElementById('modal-root')

export const Modal = ({ children, visible }) => {
  return createPortal(
    <Overlay visible={visible}>
      <Container>
        {children}
      </Container>
    </Overlay>
    , modalRoot)
}

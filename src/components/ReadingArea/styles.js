import styled from 'styled-components'
import { fadeUp } from '../../styles/Animations'

export const Container = styled.div`
  display: flex; 
  align-items: center;
  animation: ${fadeUp} .5s ease;
`

export const Color = styled.div`
  height: 1em;
  width: 1em;
  border-radius: 100%;
  background-color: ${props => props.color};
  margin-right: 1em;
`

export const Name = styled.span`

`

export const DeleteBtn = styled.button`
  margin-left: auto;
  color: ${props => props.theme.colors.midgray};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.jewel}
  }
`

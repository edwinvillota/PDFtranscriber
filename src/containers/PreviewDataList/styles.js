import styled from 'styled-components'

export const Details = styled.details`
  margin: 1em 0;
  font-size: ${props => props.theme.fontSizes.desktop.small};
  display: ${props => props.visible ? 'flex' : 'none'};

`

export const Summary = styled.summary`
  cursor: pointer;
  outline: none;
`

export const Ul = styled.ul`
`

import styled from 'styled-components'

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 3em;
  border: solid 2px ${props => props.theme.colors.fuschia};
  color: ${props => props.theme.colors.white};
  border-radius: 50px;
  font-size: ${props => props.theme.fontSizes.desktop.subtitle};
  cursor: pointer;

  & svg {
    margin-left: 1em;
  }
`

export const Input = styled.input`
  display: none;
`

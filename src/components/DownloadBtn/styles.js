import styled from 'styled-components'
import { BaseButton } from '../../styles/Base'

export const Button = styled(BaseButton)`
  border: solid 1px ${props => props.theme.colors.fuschia};
  color: ${props => props.theme.colors.fuschia};
  height: 40px;
  border-radius: 20px;
  margin-top: auto;
  transition: all .2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.fuschia};
    color: ${props => props.theme.colors.white};
  }
`

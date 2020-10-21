import styled from 'styled-components'
import { fadeUp } from '../../styles/Animations'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  border: solid 1px ${props => props.theme.colors.stark};
  animation: ${fadeUp} .5s ease;
`

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.stark};
`

export const Page = styled.span`
  color: ${props => props.theme.colors.void};
`

export const PropsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: .5em;
  color: ${props => props.theme.colors.void};
  padding: .5em;
`

export const Prop = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  font-size: ${props => props.theme.fontSizes.desktop.small};
`

export const PropName = styled.b`
  font-weight: 400;
  color: ${props => props.theme.colors.midgray};
`

export const PropText = styled.span`

`

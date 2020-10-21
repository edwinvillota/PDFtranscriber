import styled from 'styled-components'
import { BaseMainTitle, BaseSubTitle } from '../../styles/Base'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const MainTitle = styled(BaseMainTitle)`

`

export const MainSubtitle = styled(BaseSubTitle)`
  color: ${props => props.theme.colors.jewel};
  margin-bottom: 4em;
`

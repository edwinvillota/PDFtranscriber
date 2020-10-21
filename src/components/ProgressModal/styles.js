import styled from 'styled-components'

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.title};
  font-size: ${props => props.theme.fontSizes.desktop.subtitlee};
  font-weight: 400;
  color: ${props => props.theme.colors.void};
`

export const Subtitle = styled.h2`
  color: ${props => props.theme.colors.midgray};
  font-size: ${props => props.theme.fontSizes.desktop.small};
  font-weight: 200;
  margin-bottom: 1em;
`

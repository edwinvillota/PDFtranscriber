import styled from 'styled-components'

export const BaseMainTitle = styled.h1`
  font-family: ${props => props.theme.fonts.title};
  font-size: ${props => props.theme.fontSizes.desktop.mainTitle};
  font-weight: 100;
`
export const BaseTitle = styled.h1`
  font-family: ${props => props.theme.fonts.title};
  font-size: ${props => props.theme.fontSizes.desktop.title};
  font-weight: 200;
`

export const BaseSubTitle = styled.h3`
  font-family: ${props => props.theme.fonts.normal};
  font-size: ${props => props.theme.fontSizes.desktop.subtitle};
  font-weight: 400;
`
export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

import styled from 'styled-components'
import { BaseTitle, BaseSubTitle } from '../../styles/Base'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.stark};
  color: ${props => props.theme.colors.void};
  max-height: 100vh;
  overflow-y: scroll;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`

export const Title = styled(BaseTitle)`
 padding: 0 0 .5em 0;
`

export const Subtitle = styled(BaseSubTitle)`
  padding-top: .5em;
  margin-bottom: .5em;
  border-top: solid 2px ${props => props.theme.colors.stark};
`

export const ToolBar = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.white};
  padding: 2em;
  position: relative;
  overflow-y: scroll;

  &::after {
    content: '';
    width: 100%;
    height: 7px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right, ${props => props.theme.colors.fuschia} 60%, ${props => props.theme.colors.jewel});
  }
`

export const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: .5em;
  padding-bottom: 1em;
`
export const Prop = styled.div`
  display: flex;
  align-items: center;
  grid-column: ${props => props.fullSize && '1 / 4'};
  line-height: 2em;
`

export const PropLabel = styled.span`
  color: ${props => props.theme.colors.midgray};
  margin-right: .5em;
`

export const PreviewContainer = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`

export const GoButton = styled.button`
  border: solid 1px ${props => props.disabled ? props.theme.colors.stark : props.theme.colors.fuschia};
  border-radius: 50px;
  padding: .5em 2em;
  margin: .5em 0;
  color: ${props => props.disabled ? props.theme.colors.midgray : props.theme.colors.fuschia};
  cursor: pointer;
  justify-content: center;
  background-color: ${props => props.disabled ? props.theme.colors.stark : props.theme.colors.white};
  transition: background-color .2s ease;

  &:hover {
    background-color: ${props => props.disabled ? props.theme.colors.stark : props.theme.colors.fuschia};
    color: ${props => !props.disabled ? props.theme.colors.white : props.theme.colors.midgray};
  }
`

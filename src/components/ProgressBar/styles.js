import styled from 'styled-components'
import { fadeIn } from '../../styles/Animations'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: .5em;
`

export const BarContainer = styled.div`
  display: flex;
  height: 10px;
  position: relative;
  background-color: ${props => props.theme.colors.stark};
`

export const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transition: width 1s ease;
  width: ${props => `${props.percent}%`};
  background: linear-gradient(to right, ${props => props.theme.colors.fuschia} 60%, ${props => props.theme.colors.jewel});
  animation: ${fadeIn} .5s ease;
`

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.midgray};
  font-size: ${props => props.theme.fontSizes.desktop.small};
`

export const Percent = styled.span`
`
export const Numeric = styled.span`
`

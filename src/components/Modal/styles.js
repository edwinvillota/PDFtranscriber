import styled from 'styled-components'

export const Overlay = styled.div`
  display: ${props => props.visible ? 'flex' : 'none'};
  justify-content: center;
  padding: 2em;
  position: fixed;
  top:  0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,.2);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  box-shadow: 0px 3px 5px rgba(0,0,0,0.5);
  padding: 2em;
  overflow: hidden;
`

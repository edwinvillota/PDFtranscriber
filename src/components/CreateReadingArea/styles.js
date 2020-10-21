import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 1em;
  row-gap: .5em;
  overflow: hidden;
  max-width: 100%;
  margin-bottom: 1em;
`
export const Label = styled.label`
  color: ${props => props.theme.colors.midgray};
`

export const ColorInput = styled.input`
  border: none; 
  background: ${props => props.theme.colors.stark};
  height: 25px;
  width: 25px;
`

export const NameInput = styled.input`
  background-color: ${props => props.theme.colors.stark};
  padding: 0 5px;
`

export const CreateButton = styled.button`
  justify-content: center;
  background-color: ${props => props.disabled ? props.theme.colors.midgray : props.theme.colors.jewel};
  color: ${props => props.theme.colors.white};
  padding: .5em 1em;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color .5s ease;

  &:hover {
    background-color: ${props => props.disabled ? props.theme.colors.midgray : props.theme.colors.fuschia};
  }
`

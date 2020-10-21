import React, { useContext, useState, useEffect } from 'react'
import { Container, InputGrid, ColorInput, NameInput, Label, CreateButton } from './styles'
import { FiEdit, FiSave } from 'react-icons/fi'
import { WorkplaceContext } from '../../context/WorkplaceContext'

export const CreateReadingArea = () => {
  const { startPoint, endPoint, captureEnabled, setCaptureEnabled, actualColor, setActualColor, actualName, setActualName, areas, setAreas } = useContext(WorkplaceContext)
  const [enabledSave, setEnabledSave] = useState(false)

  const handleChange = prop => e => {
    switch (prop) {
      case 'color':
        setActualColor(e.target.value)
        break
      case 'name':
        setActualName(e.target.value)
    }
  }

  const handleCreateArea = () => {
    if (!captureEnabled) {
      setCaptureEnabled(true)
    } else {
      if (startPoint && endPoint) {
        setAreas([
          ...areas,
          { ...startPoint, ...endPoint, color: actualColor, name: actualName }
        ])
        setActualColor('#000000')
        setActualName('')
        setCaptureEnabled(false)
      }
    }
  }

  useEffect(() => {
    if (startPoint && endPoint && actualColor && actualName) {
      setEnabledSave(true)
    }
  }, [startPoint, endPoint, actualColor, actualName])

  return (
    <Container>
      <InputGrid>
        <Label>Color</Label>
        <ColorInput type='color' onChange={handleChange('color')} value={actualColor}/>
        <Label>Name</Label>
        <NameInput onChange={handleChange('name')} value={actualName}/>
      </InputGrid>
      <CreateButton onClick={handleCreateArea} captureEnabled={captureEnabled} disabled={(captureEnabled && !enabledSave) || (!actualColor || !actualName)}>
        {
          captureEnabled
            ? (
              <>
                <FiSave size={15} style={{ marginRight: '.5em' }}/>
                Save
              </>
            )
            : (
              <>
                <FiEdit size={15} style={{ marginRight: '.5em' }}/>
                Crear
              </>
            )
        }
      </CreateButton>
    </Container>
  )
}

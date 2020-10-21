import React, { useContext } from 'react'
import { Container } from './styles'
import { WorkplaceContext } from '../../context/WorkplaceContext'
import { ReadingArea } from '../../components/ReadingArea'

export const ReadingAreaList = () => {
  const { areas, setAreas } = useContext(WorkplaceContext)

  const handleDeleteArea = ({ color, name }) => {
    console.log(color)
    console.log(name)
    const filterAreas = areas.filter(a => (a.name !== name || a.color !== color))
    setAreas(filterAreas)
  }

  return (
    <Container>
      {
        areas.map(a =>
          <ReadingArea key={`${a.name}-${a.color}`} color={a.color} name={a.name} handleDeleteArea={handleDeleteArea}/>
        )
      }
    </Container>
  )
}

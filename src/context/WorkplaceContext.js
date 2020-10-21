import { createContext } from 'react'

const workplace = {
  posX: 0,
  posY: 0,
  handleMouseMove: () => {},
  handleCreateArea: () => {}
}

export const WorkplaceContext = createContext(workplace)

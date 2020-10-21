import { createContext } from 'react'

const file = {
  file: null,
  loading: false,
  setFile: () => {},
  clearFile: () => {}
}

export const FileContext = createContext(file)

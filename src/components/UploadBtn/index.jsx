import React, { useContext } from 'react'
import { Label, Input } from './styles'
import { FiUploadCloud } from 'react-icons/fi'
import { FileContext } from '../../context/FileContext'

export const UploadBtn = () => {
  const { file, setFile } = useContext(FileContext)
  return (
    <Label htmlFor='file'>
      {file ? file.name : 'Upload Your File'}
      <FiUploadCloud size={30}/>
      <Input type='file' id='file' onChange={setFile} accept='.pdf'/>
    </Label>
  )
}

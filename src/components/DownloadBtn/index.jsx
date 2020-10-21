import React from 'react'
import { useParams } from 'react-router-dom'
import { Button } from './styles'
import { config } from '../../config'

export const DownloadBtn = () => {
  const { file } = useParams()

  return (
    <Button
      onClick={() => {
        window.open(`${config.BASE_API}/pdf/downloadCsv/${file}`)
      }}
    >
      Descargar
    </Button>
  )
}

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Progress } from './styles'
import { UploadBtn } from '../../components/UploadBtn'
import { FileContext } from '../../context/FileContext'
import { config } from '../../config'
import axios from 'axios'

export const MainFileUploader = () => {
  const [progress, setProgress] = useState()
  const history = useHistory()

  const setFile = (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)

    axios.post(`${config.BASE_API}/upload`, formData, {
      onUploadProgress: (ProgressEvent) => {
        const prog = Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%'
        setProgress(prog)
      }
    })
      .then(res => {
        if (res.status === 200) {
          const { hash } = res.data
          history.push(`/workplace/${hash}`)
        }
      })
      .catch(err => console.log(err))

    changeFile(prevState => {
      return {
        ...prevState,
        file: file
      }
    })
  }

  const fileState = {
    file: null,
    loading: false,
    setFile
  }

  const [file, changeFile] = useState(fileState)

  return (
    <FileContext.Provider value={file}>
      <UploadBtn />
      <Progress>
        {progress}
      </Progress>
    </FileContext.Provider>
  )
}

import { useState, useEffect } from 'react'
import { config } from '../config'
import axios from 'axios'

export function usePdfPreview (file) {
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    (function getPreview () {
      try {
        const data = {
          file: file
        }
        const response = axios.post(`${config.BASE_API}/pdf/preview`, data)
        response.then(data => {
          setPreview(data.data)
        })
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  return [preview]
}

import { useState, useEffect } from 'react'
import { config } from '../config'
import io from 'socket.io-client'

export function useSocket (file) {
  const [connected, setConnected] = useState(false)
  const [chunk, setChunk] = useState(null)

  useEffect(() => {
    const socket = io(config.BASE_SOCKET)

    socket.on('connect', () => {
      setConnected(true)
      socket.on('pdfProgress', (data) => {
        if (data.file === file) {
          setChunk(data)
        }
      })
    })
  }, [])

  return [connected, chunk]
}

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Title, Subtitle } from './styles'
import { ChunkProgressList } from '../../containers/ChunkProgressList'
import { Modal } from '../../components/Modal'
import { ProgressBar } from '../../components/ProgressBar'
import { DownloadBtn } from '../../components/DownloadBtn'
import { useSocket } from '../../hooks/useSocket'

export const ProgressModal = ({ visible, file }) => {
  const [connected, chunk] = useSocket(file)
  const [chunks, setChunks] = useState([])
  const [progress, setProgress] = useState(null)

  useEffect(() => {
    if (chunk) {
      setProgress({ total: chunk.total, progress: chunk.page })
      if (chunks.length > 4) {
        const newChunks = chunks
        newChunks.shift()
        setChunks([
          ...newChunks,
          chunk
        ])
      } else {
        setChunks([
          ...chunks,
          chunk
        ])
      }
    }
  }, [chunk])

  return (
    <Modal visible={visible}>
      <Title>In Process...</Title>
      <Subtitle>Websocket {connected && 'Connected'}</Subtitle>
      {progress && <ProgressBar {...progress}/>}
      <ChunkProgressList chunks={chunks} />
      <DownloadBtn />
    </Modal>
  )
}

ProgressModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  file: PropTypes.string.isRequired
}

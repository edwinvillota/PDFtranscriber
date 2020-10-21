import React, { useEffect, useRef, useContext } from 'react'
import PropTypes from 'prop-types'
import { Canvas } from './styles'
import { WorkplaceContext } from '../../context/WorkplaceContext'
import { usePdfPreview } from '../../hooks/usePdfPreview'

export const Preview = ({ file }) => {
  const [preview] = usePdfPreview(file)
  const canvasEl = useRef(null)
  const { handleMouseMove, handleStartArea, handleEndArea, setRef, captureEnabled, areas } = useContext(WorkplaceContext)

  useEffect(() => {
    setRef(canvasEl)
  }, [])

  useEffect(() => {
    if (preview) {
      const ctx = canvasEl.current.getContext('2d')
      const image = new Image()
      image.src = `${preview.base64}`
      image.onload = () => {
        ctx.drawImage(image, 0, 0)
        if (areas) {
          ctx.lineWidth = 2
          areas.forEach(a => {
            ctx.strokeStyle = a.color
            ctx.strokeRect(a.x, a.y, a.width, a.height)
          })
        }
      }
    }
  }, [preview, areas])

  return (
    <>
      <Canvas
        ref={canvasEl}
        height={preview && preview.size.height} width={preview && preview.size.width}
        onMouseMove={handleMouseMove}
        onMouseDown={captureEnabled ? handleStartArea : () => (null)}
        onMouseUp={captureEnabled ? handleEndArea : () => (null)}
      />
    </>
  )
}

Preview.propTypes = {
  file: PropTypes.string.isRequired
}

import React, { useState, useEffect } from 'react'
import { Section, Title, Grid, Subtitle, ToolBar, PreviewContainer, Details, Prop, PropLabel, GoButton } from './styles'
import { useParams } from 'react-router-dom'
import { WorkplaceContext } from '../../context/WorkplaceContext'
import { Preview } from '../../components/Preview'
import { CreateReadingArea } from '../../components/CreateReadingArea'
import { PreviewDataList } from '../../containers/PreviewDataList'
import { ReadingAreaList } from '../../containers/ReadingAreasList'
import { ProgressModal } from '../../components/ProgressModal'
import axios from 'axios'
import { config } from '../../config'

export const Workplace = () => {
  const { file } = useParams()
  const [ref, setRef] = useState(null)
  const [ctx, setCtx] = useState(null)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [captureEnabled, setCaptureEnabled] = useState(false)
  const [startPoint, setStartPoint] = useState(null)
  const [endPoint, setEndPoint] = useState(null)
  const [areas, setAreas] = useState([])
  const [actualColor, setActualColor] = useState('#000000')
  const [actualName, setActualName] = useState('')
  const [previewData, setPreviewData] = useState([])
  const [inProcess, setInProcess] = useState(false)

  const handleMouseMove = (e) => {
    if (ref) {
      const rect = ref.current.getBoundingClientRect()
      setX(Math.round(e.clientX - rect.left))
      setY(Math.round(e.clientY - rect.top))
    }
  }

  const handleStartArea = () => {
    setStartPoint({ x, y })
  }

  const handleEndArea = () => {
    const width = x - startPoint.x
    const height = y - startPoint.y

    setEndPoint({ width, height })
    if (ctx) {
      ctx.strokeStyle = actualColor
      ctx.strokeRect(startPoint.x, startPoint.y, width, height)
    }
  }

  const handleGetPreviewData = () => {
    axios({
      method: 'post',
      url: `${config.BASE_API}/pdf/previewData`,
      data: {
        file,
        areas
      }
    })
      .then(response => {
        setPreviewData(response.data)
      })
      .catch(error => {
        setPreviewData(error)
      })
  }

  const handleGo = () => {
    setInProcess(true)
    axios({
      method: 'post',
      url: `${config.BASE_API}/pdf/recognizeAll`,
      data: {
        file,
        areas
      }
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    if (ref) {
      const ctx = ref.current.getContext('2d')
      setCtx(ctx)
    }
  }, [ref])

  return (
    <WorkplaceContext.Provider value={{
      x,
      y,
      handleMouseMove,
      handleStartArea,
      handleEndArea,
      setRef,
      areas,
      setAreas,
      startPoint,
      endPoint,
      captureEnabled,
      setCaptureEnabled,
      actualColor,
      actualName,
      setActualColor,
      setActualName,
      setStartPoint,
      setEndPoint
    }}>
      <ProgressModal visible={inProcess} file={file}/>
      <Section>
        <Grid>
          <ToolBar>
            <Title>
              Toolbox
            </Title>
            <Subtitle>Details</Subtitle>
            <Details>
              <Prop>
                <PropLabel>
                    Pages
                </PropLabel>
                  1017
              </Prop>
              <Prop>
                <PropLabel>
                    Size
                </PropLabel>
                2000x2000
              </Prop>
              <Prop fullSize={true}>
                <PropLabel>
                    Position
                </PropLabel>
                x {x} y {y}
              </Prop>
            </Details>
            <Subtitle>Create Reading Area</Subtitle>
            <CreateReadingArea />
            <Subtitle>Reading Areas</Subtitle>
            <ReadingAreaList />
            <Subtitle>Actions</Subtitle>
            <GoButton disabled={!areas.length} onClick={handleGetPreviewData} >
              Get Preview Data
            </GoButton>
            <PreviewDataList data={previewData}/>
            <GoButton disabled={!previewData.length} onClick={handleGo}>
              Go
            </GoButton>
          </ToolBar>
          <PreviewContainer>
            <Subtitle>Preview</Subtitle>
            <Preview file={file}/>
          </PreviewContainer>
        </Grid>
      </Section>
    </WorkplaceContext.Provider>
  )
}

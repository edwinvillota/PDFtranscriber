import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'
import { ChunkProgress } from '../../components/ChunkProgress'

export const ChunkProgressList = ({ chunks }) => (
  <Container>
    {
      chunks.map((chunk) =>
        chunk.error ? null : <ChunkProgress key={chunk.page} page={chunk.page} data={chunk.data}/>
      )
    }
  </Container>
)

ChunkProgressList.propTypes = {
  chunks: PropTypes.array.isRequired
}

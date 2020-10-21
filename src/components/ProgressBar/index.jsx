import React from 'react'
import PropTypes from 'prop-types'
import { Container, BarContainer, Bar, DataContainer, Percent, Numeric } from './styles'

export const ProgressBar = ({ total, progress }) => {
  return (
    <Container>
      <BarContainer>
        <Bar percent={Math.ceil((progress / total) * 100)}/>
      </BarContainer>
      <DataContainer>
        <Numeric>
          {`${progress}/${total}`}
        </Numeric>
        <Percent>
          {`${Math.ceil((progress / total) * 100)}%`}
        </Percent>
      </DataContainer>
    </Container>
  )
}

ProgressBar.propTypes = {
  total: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired
}

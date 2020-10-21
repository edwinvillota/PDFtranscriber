import React from 'react'
import PropTypes from 'prop-types'
import { Container, PageContainer, Page, PropsContainer, Prop, PropName, PropText } from './styles'

export const ChunkProgress = ({ page, data }) => (
  <Container>
    <PageContainer>
      <Page>{page}</Page>
    </PageContainer>
    <PropsContainer>
      {
        data.map(prop =>
          <Prop key={prop.name}>
            <PropName>{prop.name}</PropName>
            <PropText>{prop.text}</PropText>
          </Prop>
        )
      }
    </PropsContainer>
  </Container>
)

ChunkProgress.propTypes = {
  page: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired
}

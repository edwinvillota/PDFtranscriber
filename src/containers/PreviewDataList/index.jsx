import React from 'react'
import PropTypes from 'prop-types'
import { Ul, Details, Summary } from './styles'
import { PreviewDataArea } from '../../components/PreviewDataArea'

export const PreviewDataList = ({ data }) => (
  <Details visible={data.length}>
    <Summary>
      Preview Data
    </Summary>
    <Ul>
      {
        data.map((d, i) =>
          <PreviewDataArea key={`${d.name}-${i}`} name={d.name} text={d.text}/>
        )
      }
    </Ul>
  </Details>
)

PreviewDataList.propTypes = {
  data: PropTypes.array.isRequired
}

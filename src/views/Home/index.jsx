import React from 'react'
import { Section, MainTitle, MainSubtitle } from './styles'
import { MainFileUploader } from '../../containers/MainFileUploader'

export const Home = () => (
  <Section>
    <MainTitle>
      PDF Transcriber
    </MainTitle>
    <MainSubtitle>
      Extract the important
    </MainSubtitle>
    <MainFileUploader />
  </Section>
)

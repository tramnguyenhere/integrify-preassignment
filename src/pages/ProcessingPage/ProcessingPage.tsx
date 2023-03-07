import React from 'react'
import './ProcessingPage.scss'

interface Props {
  processingTerm: string
}

const ProcessingPage = ({processingTerm}: Props) => {
  return (
    <div className='page__wrapper'>{processingTerm}</div>
  )
}

export default ProcessingPage
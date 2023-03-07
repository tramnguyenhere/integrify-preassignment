import React from 'react'
import './ProcessingPage.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

interface Props {
  processingTerm: string
}

const ProcessingPage = ({ processingTerm }: Props) => {
  const isDarkMode = useSelector((state: RootState) => state.colorMode.darkMode)
  return (
    <div className={`page__wrapper ${isDarkMode && 'dark-mode'}`}>{processingTerm}</div>
  )
}

export default ProcessingPage
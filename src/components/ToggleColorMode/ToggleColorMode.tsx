import React from 'react'
import Brightness1Icon from '@mui/icons-material/Brightness1';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import './ToggleColorMode.scss'
import { setToggleColorMode } from '../../redux/features/colorModeSlice';

const ToggleColorMode = () => {
  const isDarkMode = useSelector((state: RootState) => state.colorMode.darkMode)
  const dispatch = useDispatch()

  const colorModeToggleHandler = () => {
    dispatch(setToggleColorMode(!isDarkMode))
  }

  return (
    <button className='color-mode__wrapper' onClick={colorModeToggleHandler}>
      {isDarkMode ? (
        <>
          <Brightness1Icon className='mode'/>
          <Brightness2Icon />
        </>
      ) :(
        <>
          <WbSunnyIcon  />
          <Brightness1Icon className='mode'/>
        </>
      )}
    </button>
  )
}

export default ToggleColorMode
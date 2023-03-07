import React from 'react'
import { LinkedIn, GitHub } from '@mui/icons-material';
import './Footer.scss'

const Footer = () => {
  return (
      <div className='footer'>
        <div className="social-accounts">
            <a className="social-account" href='https://github.com/tramnguyenhere'>
                <GitHub />
            </a>
            <a className="social-account" href='nkedin.com/in/tramnguyenhere/'>
                <LinkedIn />
            </a>
        </div>  
        <div className="copyright">
            Copyright © 2023 tramnguyenhere. All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer
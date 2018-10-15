import React from 'react'
import { SocialIcon } from 'react-social-icons';

import './LinkMenu.scss'

const LinkMenu = ({ siteTitle }) => (
  <div className="LinkMenu">
    <SocialIcon 
      className="LinkMenu__link" 
      url="mailto:samkuhlmann@gmail.com" 
      color="#153B50"/>
    <SocialIcon 
      className="LinkMenu__link" 
      url="https://github.com/skuhlmann" 
      color="#153B50"/>
    <SocialIcon 
      className="LinkMenu__link" 
      url="https://www.linkedin.com/in/samkuhlmann" 
      color="#153B50"/>
  </div>
)

export default LinkMenu
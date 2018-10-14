import React from 'react'
import { SocialIcon } from 'react-social-icons';

import './LinkMenu.scss'

const LinkMenu = ({ siteTitle }) => (
  <div className="LinkMenu">
    <SocialIcon 
      className="LinkMenu__link" 
      url="mailto:samkuhlmann@gmail.com" 
      color="#5d3f98"/>
    <SocialIcon 
      className="LinkMenu__link" 
      url="https://github.com/skuhlmann" 
      color="#5d3f98"/>
    <SocialIcon 
      className="LinkMenu__link" 
      url="https://www.linkedin.com/in/samkuhlmann" 
      color="#5d3f98"/>
  </div>
)

export default LinkMenu
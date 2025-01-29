import React from 'react'
import MenulLink from '../MenuLink/MenulLink'
import './HeaderContent.css'

function HeaderContent() {
  return (
    <div id ="navcontent">  
    
    <img className='Mainlogo' src='HomeLogo.jpeg'  alt='logo'/>
        
        <div className='menuitems'>
                <MenulLink linkname ="Home" url ="#home"/>
                <MenulLink linkname ="Mills" url ="#Mills"/>
                <MenulLink linkname ="Stock" url ="#Stock"/>
                <MenulLink linkname ="Login" url ="#Login"/>
                <MenulLink linkname ="Contact us" url ="#Contacus"/>
        </div>
        </div>
  )
}

export default HeaderContent
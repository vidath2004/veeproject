import React from 'react'
import './MenuLink.css'

function MenulLink(Props) {
  return (
    <div>
        <a className='menu' href={Props.url}>{Props.linkname}</a>
    </div>
  )
}

export default MenulLink
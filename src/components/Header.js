import React from 'react'
import './Header.css'
export const Header = () => {
  return (
    <div className='app-header'>
        <span className='header-title'>Learn React</span>
        <div className='header-menu'>
          <span>Home</span>
          <span>Usage</span>
          <span>Settings</span>
          <span>logout</span>
        </div>
    </div>
  )
}

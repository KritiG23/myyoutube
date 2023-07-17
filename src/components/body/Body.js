import React from 'react'
import Sidebar from './sidebarContainer/Sidebar'
import MainBody from './bodyContainer/MainBody'

const Body = () => {
  return (
    <div className="flex">
        <Sidebar />
        <MainBody />
    </div>  
  )
}

export default Body
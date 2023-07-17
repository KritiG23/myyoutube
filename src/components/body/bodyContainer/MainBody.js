import React from 'react'
import TopFilterList from './TopFilterList'
import VideoCardList from './VideoCardList'
import "./Body.css"
const MainBody = () => {
  return (
    <div className="body-cont">
      <TopFilterList />
      <VideoCardList />
    </div>
  )
}

export default MainBody
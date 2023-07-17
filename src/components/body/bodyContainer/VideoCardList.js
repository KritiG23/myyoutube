import React from 'react'
import VideoCard from './VideoCard'

const VideoCardList = () => {
  return (
    <div className="flex flex-wrap pl-20 pr-20 pt-4">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  )
}

export default VideoCardList
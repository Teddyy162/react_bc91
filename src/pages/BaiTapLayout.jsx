import React from 'react'
import HeaderBTLayout from '../components/HeaderBTLayout'
import Album from '../components/Album'
import AlbumContent from '../components/AlbumContent'
import AlbumCard from '../components/AlbumCard'
import AlbumFooter from '../components/AlbumFooter'

const Baitaplayout = () => {
  return (
    <div>
        <HeaderBTLayout/>
        <Album/>
        <AlbumContent/>
        <AlbumCard/>
        <AlbumFooter/>
        
    </div>
  )
}

export default Baitaplayout
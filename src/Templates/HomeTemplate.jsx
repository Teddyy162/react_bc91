import React from 'react'
import { HeaderHome } from '../components/HeaderHome'
import { Outlet } from 'react-router-dom'

const HomeTemplate = () => {
  return (
    <div className='home-page'>
        <HeaderHome/>
        <div className="content">
            <Outlet/>
        </div>
    </div>
  )
}

export default HomeTemplate
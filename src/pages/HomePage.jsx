//rafce
import React from 'react'
import { HeaderHome } from '../components/HeaderHome'
import Navigation from '../components/Navigation'
import Content from '../components/Content'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <>
            <HeaderHome />
            <div className='row gap-0 bg-danger' style={{ height: '75vh' }}>
                <div className='col-4 m-0 p-0 h-100'>
                    <Navigation />
                </div>
                <div className='col-8 m-0 p-0'>
                    <Content />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default HomePage
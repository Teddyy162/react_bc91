import React from 'react'
import Card from './Card'

const Content = () => {
    return (
        <div className='bg-warning text-white p-5 text-center'>
            <h3>Content</h3>
            <div className='row'>
                <div className='col-4'>
                    <Card />
                </div>
                <div className='col-4'>
                    <Card />
                </div>
                <div className='col-4'>
                    <Card />
                </div>
            </div>

        </div>
    )
}

export default Content
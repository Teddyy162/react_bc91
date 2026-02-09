import React from 'react'
import obStyleModule from './StyleComponentDemo.module.css'

const StyleComponentDemo = () => {
    return (
        <div className='container'>
            <h1>Style component</h1>
            <p className='h-heading'>Lorem ipsum dolor sit amet.</p>
            <p style={{ backgroundColor: 'blue', color: 'orange' }}>Lorem ipsum dolor sit amet.</p>
            <p className = {`${obStyleModule.bgRed} fs-5 ${obStyleModule['text-pink']}`}>Lorem ipsum dolor sit amet.</p>

        </div>
    )
}

export default StyleComponentDemo
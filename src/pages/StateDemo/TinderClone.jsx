//rafce
import React, { useState } from 'react'

const TinderClone = () => {
    const [numPeople, setNumpeople] = useState(1);

    const randomNumpeople = () => {
        let numRandom = Math.floor(Math.random() * 99) + 1;  //Trả từ 0 đến 98 => + 1
        setNumpeople(numRandom);
    }
    return (
        <div className='container'>
            <h1>Tinder app</h1>
            <div className='card w-25 '>
                <div className='card-header bg-danger fs-3 fw-bold text-white'>Tinder app</div>
                <img src={`https://i.pravatar.cc?u=${numPeople}`} alt='...' />
                <div className='card-body'>
                    <h1>Name</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p className='card-text'>Age: 20</p>
                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <button className='btn btn-outline-dark' onClick={() => {
                        randomNumpeople();
                    }}>Dislike</button>
                    <button className='btn btn-outline-danger' onClick={() => {
                        randomNumpeople();
                    }}>Like</button>
                </div>
            </div>

        </div>
    )
}

export default TinderClone

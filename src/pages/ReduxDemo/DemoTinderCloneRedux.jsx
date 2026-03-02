import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const DemoTinderCloneRedux = () => {
    const { numPeopleReducer } = useSelector(rootState => rootState);
    const dispatch = useDispatch();


    return (
        <div className='container'>
            <h1>Tinder app</h1>
            <div className='card w-25 '>
                <div className='card-header bg-danger fs-3 fw-bold text-white'>Tinder app</div>
                <img src={`https://i.pravatar.cc?u=${numPeopleReducer}`} alt='...' />
                <div className='card-body'>
                    <h1>Name</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p className='card-text'>Age: 20</p>
                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <button className='btn btn-outline-dark' onClick={() => {
                        //tạo ra số ngẫu nhiên gửi lên
                        const action = {
                            type: 'RANDOM_PEOPLE_NUMBER',
                        }

                        //gửi dữ liệu lên redux store
                        dispatch(action);


                    }}>Dislike</button>
                    <button className='btn btn-outline-danger' onClick={() => {

                    }}>Like</button>
                </div>
            </div>

        </div>
    )
}

export default DemoTinderCloneRedux
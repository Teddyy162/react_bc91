//rafce
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const DemoChangeCarRedux = () => {

    const { imgCarReducer } = useSelector(rootState => rootState);
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <h1>Change color car</h1>
            <div className='row'>
                <div className='col-6'>
                    <img className='w-100' src={imgCarReducer} alt='...' />
                </div>
                <div className='col-6'>
                    <button className='btn btn-danger mx-2' onClick={(e) => {
                        //Bước 1: tạo object action
                        const action = {
                            type: 'CHANGE_CAR_COLOR',
                            payload: 'red'
                        }
                        //Bước 2: dispatch action lên redux store


                    }}>Red car</button>
                    <button className='btn btn-secondary mx-2' onClick={(e) => {
                        const action = {
                            type: 'CHANG_CAR_COLOR',
                            payload: 'siver'
                        }
                    }}>Silver car</button>
                    <button className='btn btn-dark mx-2' onClick={(e) => {
                    }}>Black car</button>
                    <button className='btn btn-default mx-2' onClick={(e) => {
                    }}>Steel car</button>
                </div>
            </div>
        </div>
    )
}

export default DemoChangeCarRedux
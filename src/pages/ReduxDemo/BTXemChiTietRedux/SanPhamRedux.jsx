//rafce
import React from 'react'
import { useDispatch } from 'react-redux';

const SanPhamRedux = (props) => {
    const dispatch = useDispatch();
    const { sp } = props;


    return (
        <div className='card'>
            <img src={sp.hinhAnh} alt='...' />
            <div className='card-body'>
                <h3 className='card-title'>{sp.tenSP}</h3>
                <p className='card-text'>{sp.giaBan}</p>
                <button data-bs-toggle="modal" data-bs-target="#modalId" className='btn btn-dark' onClick={(e) => {
                    //Tạo action
                    const action = {
                        type: 'CHANGE_PRODUCT_DETAIL_ACTION',
                        payload: sp
                    }
                    //Gửi lên store
                    dispatch(action);
                }}>Detail</button>
            </div>
        </div>
    )
}

export default SanPhamRedux
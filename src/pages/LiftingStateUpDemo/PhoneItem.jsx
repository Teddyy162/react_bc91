import React from 'react'

const PhoneItem = (props) => {
    const { phone, handleSetStatePhoneDetail } = props;
    return (
        <div className='card'>
            <img src={phone.hinhAnh} alt='...' height={350} />
            <div className='card-body'>
                <h3 className='card-title'>{phone.tenSP}</h3>
                <p className='card-text'>{phone.giaBan}</p>
                <button className='btn btn-success' onClick={(e) => {
                    handleSetStatePhoneDetail(phone);
                }}>Xem chi tiết</button>
            </div>
        </div>
    )
}

export default PhoneItem
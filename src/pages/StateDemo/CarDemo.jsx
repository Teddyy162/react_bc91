import React, { useState } from 'react'
/*
    B1: Xây dựng giao diện
    B2: Xác định dữ liệu thay đổi (string, bool, number, ...)
    B3: Data binding state lên giao diện
    B4: Xây dựng sự kiện xử lý setState


*/

const CarDemo = () => {
    const [img, setImg] = useState('/img/products/black-car.jpg');

    const changeImgCar = (color) => {
        setImg(`/img/products/${color}.jpg`)
    }
    return (
        <div className='container'>
            <h1>Change color car</h1>
            <div className='row'>
                <div className='col-6'>
                    <img className='w-100' src={img} alt='...' />
                </div>
                <div className='col-6'>
                    <button className='btn btn-danger mx-2' onClick={(e) => {
                        changeImgCar('red');
                    }}>Red car</button>
                    <button className='btn btn-secondary mx-2' onClick={(e) => {
                        changeImgCar('silver')
                    }}>Silver car</button>
                    <button className='btn btn-dark mx-2' onClick={(e) => {
                        changeImgCar('black')
                    }}>Black car</button>
                    <button className='btn btn-default mx-2' onClick={(e) => {
                        changeImgCar('steel')
                    }}>Steel car</button>
                </div>
            </div>
        </div>
    )
}

export default CarDemo
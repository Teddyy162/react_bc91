//rafce
import React from 'react'

const DataBinding = () => {
    //Biến
    let title = 'cybersoft';
    let hoTen = 'khải';
    //hàm
    /*
        Đối với hàm khi render dữ liệu trả về có thể là dạng:
        number,string, bool, jsx 
    */
    const renderName = (name) => {
        return <div>
            Hello ! {name}
        </div>
    }

    return (
        <div className='container'>
            <h1>Databinding</h1>
            <h3>Tiêu đề: {title}</h3>
            {renderName('khải')}
            <div className='form-group w-25'>
                <label htmlFor='hoTen'>Họ tên</label>
                <input className='form-control' id="hoTen" value={hoTen} />

            </div>

        </div>
    )
}

export default DataBinding
//rafce
import React, { useState } from 'react'

//hook(Hàm chỉ sử dụng cho function component) useState : Quản lý giá trị thay đổi trên giao diện
// [state,setState] = useState(initState);
// Khi setState được gọi thì function component sẽ chạy lại (render lại ui)
const ChangeNumber = () => {
    const [number, setNumber] = useState(0);
    //[number, function(newNumber) => number = newNumber]
    return (
        <div className='container'>
            <h1>Count: <span className='text text-danger'>{number}</span></h1>
            <button className='btn btn-dark me-2' onClick={(e) => {
                setNumber(number + 1);
            }}>+</button>
            <button className='btn btn-dark me-2' onClick={(e) => {
                setNumber(number - 1);
            }}>-</button>
        </div>
    )
}

export default ChangeNumber
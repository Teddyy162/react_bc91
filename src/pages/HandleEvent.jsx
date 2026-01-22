import React from 'react'

const HandleEvent = () => {
    //callback function
    const handleClick = (e) => {
        console.log('hello ahihi');
    }
    //Khai báo các hàm xử lý
    const getProductApi = () => {

        console.log('get product api!');
    }

    return (
        <div className='container'>
            <h1>Handle event</h1>
            <button className='btn btn-success' onClick={handleClick}>click me !</button>
            <br /> <br />
            <button className='btn btn-dark border-1 border-dark' onClick={(event) => {
                console.log('hello anonymous function');
                //Gọi các hàm khác
                getProductApi();
                //event.target: dom ngược lại thẻ
                // event.target.className = 'btn btn-success';
                event.target.classList.toggle('btn-dark');

            }}>click</button>


        </div>
    )
}

export default HandleEvent



//function closure

// const handleEvent = () => {


//     return function () {
//         console.log(123)
//     }
// }

// let callback = handleEvent();
// callback();
import React from 'react'
import ChildComponent from './ChildComponent'
import CardDemo from './CardDemo'
import ChildrenProp from './ChildrenProp';
import CarDemo from '../StateDemo/CarDemo';


/*
    Props là properties (các thuộc tính của thẻ)
    + Đối với thẻ bình thường input (id,value, className,style,...)
    + Đối với thẻ <Component propName="value" />
    + Props là giá trị không được gán lại (const hằng số)
    + So sánh sự khác biệt giữa state và props
      + Đều là giá trị binding lên giao diện 
      + State có thể gán lại thông qua phương thức setState
      + Props sẽ cố định không thể gán lại giá trị mới (readonly value)

*/
const Propdemo = () => {
    const arrProduct = [
        { id: 1, name: 'Iphone', price: 1000, img: `https://dummyimage.com/600x400/000/fff?text=iphone` },
        { id: 2, name: 'Xiaomi', price: 2000, img: `https://dummyimage.com/600x400/000/fff?text=xiaomi` },
        { id: 3, name: 'Samsung phone', price: 3000, img: `https://dummyimage.com/600x400/000/fff?text=Samsung` }
    ];

    return (
        <div className='container'>
            <h3>Props demo</h3>
            <input className='form-control w-25' value={1} />
            <ChildComponent title="FrontEnd91" view="95" />
            <ChildComponent title="Cybersoft FE" view={"100"} />
            <hr />
            <h3>Product list</h3>
            <div className='row'>
                <div className='col-4'>
                    <CardDemo product={arrProduct[0]} />
                </div>
                <div className='col-4'>
                    <CardDemo product={arrProduct[1]} />
                </div>
                <div className='col-4'>
                    <CardDemo product={arrProduct[2]} />
                </div>
            </div>
            <hr />
            <h1>Children props</h1>
            <ChildrenProp jsxElement={<p>Lorem ipsum dolor sit amet.</p>}>
                <h1>children 123</h1>
                <CarDemo />
            </ChildrenProp>
        </div>
    )
}

export default Propdemo
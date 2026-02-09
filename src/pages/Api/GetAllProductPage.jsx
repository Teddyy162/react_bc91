import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetAllProductPage = () => {
    const [arrProduct, setArrayProduct] = useState([{
        "sizes": [
            32,
            33,
            34,
            35
        ],
        "id": 2,
        "name": "vans old school",
        "alias": "vans-old-school",
        "price": 200,
        "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
        "size": "[32,33,34,35]",
        "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "quantity": 200,
        "deleted": false,
        "categories": "[{\"id\": \"VANS_CONVERSE\",\"category\":\"VANS_CONVERSE\"}]",
        "relatedProducts": "[3,2,1]",
        "feature": true,
        "image": "http://apistore.cybersoft.edu.vn/images/van-old-school.png",
        "imgLink": "http://apistore.cybersoft.edu.vn/images/van-old-school.png"
    }]);


    const getAllProductApi = async () => {
        try {
            const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product`);

            setArrayProduct(res.data.content);
        } catch (err) {
            console.log(err)
        }

    };


    //useEffect dùng để làm gì? cho mấy trường hợp
    //TH1: dependency mảng rỗng: chạy 1 lần duy nhất khi component khởi tạo xong html => tương tự window onload
    useEffect(() => {
        //Cài đặt hàm khi component khởi tạo html thì thực thi (Thường dùng cho api get all)
        getAllProductApi();
    },[]); //dependency: tham số phụ thuộc

    return (
        <div className='container'>
            {/* <button className="btn btn-success" onClick={(e) => {
                getAllProductApi();
            }}>Load api</button> */}
            <h3>Get all product page</h3>
            <div className="row">
                {arrProduct.map((item) => {
                    return <div className="col-md-4 mt-2" key={item.id}>
                        <div className="card">
                            <img src={item.image} alt="..." />
                            <div className="card-body">
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <button className="btn btn-success">Add to cart</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default GetAllProductPage
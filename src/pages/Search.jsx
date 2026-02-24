import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'


//có 2 nghiệp vụ
//Bước 1: đưa giá trị người dùng nhập lên url
//Bước 2: lấy tham số từ url xuống gọi api để setState (Kết quả tìm kiếm)

const Search = () => {

    const [arrProduct, setArrProduct] = useState([
        {
            "sizes": [
                32,
                33,
                34,
                35
            ],
            "id": 4,
            "name": "nike adapt bb",
            "alias": "nike-adapt-bb",
            "price": 350,
            "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
            "size": "[32,33,34,35]",
            "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "quantity": 200,
            "deleted": false,
            "categories": "[{\"id\": \"NIKE\",\"category\":\"NIKE\"}]",
            "relatedProducts": "[5,6,7]",
            "feature": true,
            "image": "http://apistore.cybersoft.edu.vn/images/nike-adapt-bb.png",
            "imgLink": "http://apistore.cybersoft.edu.vn/images/nike-adapt-bb.png"
        },
        {
            "sizes": [
                32,
                33,
                34,
                35
            ],
            "id": 5,
            "name": "nike air max 270",
            "alias": "nike-air-max-270",
            "price": 350,
            "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
            "size": "[32,33,34,35]",
            "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "quantity": 200,
            "deleted": false,
            "categories": "[{\"id\": \"NIKE\",\"category\":\"NIKE\"}]",
            "relatedProducts": "[7,6,5]",
            "feature": true,
            "image": "http://apistore.cybersoft.edu.vn/images/nike-air-max-270-react.png",
            "imgLink": "http://apistore.cybersoft.edu.vn/images/nike-air-max-270-react.png"
        }])

    const [searchParam, setSearchParam] = useSearchParams(); //Dùng useSearchParams để đưa giá trị người dùng nhập lên url
    const k = searchParam.get('k')


    const getProductByKeyword = async () => {
        //Xử lý lấy keyword từ url
        let keyword = searchParam.get('k');
        if(keyword){ //Nếu keyword có trên url
            //Gọi api với keyword
            try{
                const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`);
                //Sau khi lấy dữ liệu về thì setStateArrProduct
                setArrProduct(res.data.content);



            }catch(err){
                console.log(err)
            }
        }
    }


    useEffect(()=>{
        //Gọi api khi thay đổi lần đầu load trang
        getProductByKeyword();
    },[k])

    const handelSubmit = (e) => {
        e.preventDefault();
        //submit search gọi api
        getProductByKeyword();
    }

    return (
        <div className='container'>
            <form className='mt-5' onSubmit={handelSubmit}>
                <h3>Tìm kiếm sản phẩm</h3>
                <div className="input-group">
                    <input className="form-control" name="keyword" id="keyword" onInput={(e) => {
                        const value = e.target.value;
                        //Đưa giá trị nhập lên url
                        setSearchParam({
                            k: value
                        })
                    }} />
                    <button className="btn-group btn btn-dark">Search</button>
                </div>
            </form>
            <div className="search-result my-3">
                <h3>Kết quả tìm kiếm</h3>
                <div className="row">
                    {arrProduct?.map((item, index) => {
                        return <div className="col-md-3 mt-2" key={index}>
                            <div className="card">
                                <img src={item.image} alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title">{item.name}</h3>
                                    <p className="card-text">{item.price}</p>
                                    <NavLink to={`/detail/${item.id}`} className={'btn btn-dark'}>Detail</NavLink>
                                </div>
                            </div>
                        </div>
                    })};
                </div>
            </div>
        </div>
    )
}

export default Search
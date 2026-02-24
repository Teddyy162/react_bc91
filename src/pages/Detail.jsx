import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'


//Nhận param từ url (Bước 1)
//Lấy param gọi api tương ứng
const Detail = () => {
    const param = useParams();
    const [productDetail, setProductDetail] = useState(
        {
            "id": 3,
            "name": "converse chuck taylor",
            "alias": "converse-chuck-taylor",
            "price": 250,
            "feature": false,
            "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
            "size": [
                "32",
                "33",
                "34",
                "35"
            ],
            "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "quantity": 200,
            "detaildetailedImages": [
                "rotate(0deg)",
                "rotateY(180deg)",
                "rotate(45deg)",
                "rotate(-45deg)"
            ],
            "image": "http://apistore.cybersoft.edu.vn/images/converse-chuck-taylor.png",
            "imgLink": "converse-chuck-taylor.png",
            "categories": [
                {
                    "id": "VANS_CONVERSE",
                    "category": "VANS_CONVERSE"
                }
            ],
            "relatedProducts": [
                {
                    "id": 2,
                    "name": "vans old school",
                    "alias": "vans-old-school",
                    "feature": false,
                    "price": 200,
                    "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
                    "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "image": "http://apistore.cybersoft.edu.vn/images/van-old-school.png",
                    "imgLink": null
                },
                {
                    "id": 3,
                    "name": "converse chuck taylor",
                    "alias": "converse-chuck-taylor",
                    "feature": false,
                    "price": 250,
                    "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
                    "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "image": "http://apistore.cybersoft.edu.vn/images/converse-chuck-taylor.png",
                    "imgLink": null
                },
                {
                    "id": 1,
                    "name": "vans black",
                    "alias": "vans-black-black",
                    "feature": false,
                    "price": 200,
                    "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
                    "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "image": "http://apistore.cybersoft.edu.vn/images/vans-black-black.png",
                    "imgLink": null
                }
            ]
        }
    );

    const [rotate, setRotate] = useState('rotate(0deg)')

    //Gọi api dựa trên parametter
    const getProductDetailApi = async () => {
        try {
            const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${param.id}`)
            //sau khi dữ liệu về thì đưa về state

            setProductDetail(res.data.content);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProductDetailApi();
    }, [param.id]) //Trương hợp 2: có dependency - khi dependency thay đổi thì gọi lại


    return (
        <div className="container my-5">
            <h3>Detail: {param.id}</h3>
            <div className="row g-4">
                {/* LEFT: PRODUCT IMAGE */}
                <div className="col-md-5">
                    <div className="card p-3">
                        <img style={{ transform: rotate }} src={productDetail.image} className="img-fluid mb-3" alt="product" />
                        {/* Thumbnails */}
                        <div className="d-flex gap-2">
                            {productDetail.detaildetailedImages?.map((item, index) => {
                                let className = 'border-defaut'
                                if (item == rotate) {
                                    className = 'border-primary';
                                }

                                return <a key={index} className={`border ${className} rounded-3 p-2 bg-white`} href="#" onClick={(e) => {
                                    setRotate(item)
                                }}>
                                    <img style={{ transform: item }} src={productDetail.image} className="object-fit-cover" width={70} />
                                </a>
                            })}
                        </div>
                    </div>
                </div>
                {/* RIGHT: PRODUCT INFO */}
                <div className="col-md-7">
                    {/* Badge */}
                    <div className="mb-2">
                        <span className="badge bg-primary">FREESHIP XTRA</span>
                        <span className="badge bg-warning text-dark">30 NGÀY ĐỔI TRẢ</span>
                        <span className="badge bg-success">CHÍNH HÃNG</span>
                    </div>
                    {/* Title */}
                    <h4 className="fw-bold">
                        {productDetail.name}
                    </h4>
                    {/* Rating */}
                    <div className="d-flex align-items-center mb-3">
                        <span className="text-warning me-2">★★★★★</span>
                        <span className="text-muted">(6563 đánh giá)</span>
                    </div>
                    {/* Price */}
                    <div className="mb-4">
                        <h3 className="text-danger fw-bold">{productDetail.price}$</h3>
                    </div>
                    <div className="text text-sm">
                        <p>{productDetail.description}</p>
                    </div>
                    {/* Shipping Box */}
                    <div className="card mb-4">
                        <div className="card-body">
                            <h6 className="fw-bold">Thông tin vận chuyển</h6>
                            <p className="mb-1">Giao đến Q.1, TP.HCM</p>
                            <p className="mb-1 text-success">Giao đúng chiều mai - Miễn phí</p>
                            <p className="mb-0 text-primary">Freeship đơn từ 45k</p>
                        </div>
                    </div>
                    {/* Promotions */}
                    <div className="card">
                        <div className="card-body">
                            <h6 className="fw-bold">Ưu đãi khác</h6>
                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-primary btn-sm">
                                    Giảm 20%
                                </button>
                                <button className="btn btn-outline-primary btn-sm">
                                    Giảm 20%
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sản phẩm liên quan */}
                <div className="my-5">
                    <h3>Sản phẩm tương tự</h3>
                    <div className="row">
                        {productDetail.relatedProducts.map((item) => {
                            return <div className="col-md-3 mt-2" key={item.id}>
                                <div className="card">
                                    <img src={item.image} alt="..." />
                                    <div className="card-body">
                                        <h1 className="card-title">{item.name}</h1>
                                        <p className="card-text">{item.price}</p>
                                        <NavLink to={`/detail/${item.id}`} className='btn btn-dark'>Detail</NavLink>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Detail
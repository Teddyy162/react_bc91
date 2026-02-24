import axios from 'axios'
import { useFormik } from 'formik'
import { values } from 'lodash'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


//Bước 1: tạo giao diện html cho component để người dùng có chỗ input data vào như api
//Bước 2: gọi api thêm tương ứng

const CreateProduct = () => {

    const navigate = useNavigate();
    const productInfo = useFormik({
        initialValues: {
            "id": 0,
            "name": "string",
            "price": 0,
            "description": "string",
            "shortDescription": "string",
            "quantity": 0,
            "imgLink": "string"
        },
        onSubmit: async (values) => {
            console.log(values)
            //Gọi api create product
            try {
                const res = await axios.post(`https://apistore.cybersoft.edu.vn/api/Product/addNew`, values)
                console.log(res.data.content);
                //Nếu thêm sản phẩm thành công
                alert('Thêm sản phẩm thành công !')
                //Thành công chuyển vào trang addmin/products
                navigate('/admin/products');
            } catch (err) {
                console.log(err.response.content);
                alert('Thêm sản phẩm thất bại !')


            }
        }
    })


    return (
        <div className="container mt-5 ">
            <h1 className="card-header fw-bold text-dark mt-2">
                <h4 className="mb-0">Thêm Sản Phẩm</h4>
            </h1>
            <div className="card shadow mx-auto w-75">
                <div className="card-body">
                    <form onSubmit={productInfo.handleSubmit}>
                        {/* ID */}
                        <div className="mb-3">
                            <label className="form-label">ID</label>
                            <input
                                type="number"
                                name="id"
                                className="form-control"
                                value={productInfo.values.id}
                                onChange={productInfo.handleChange}
                            />
                        </div>
                        {/* Name */}
                        <div className="mb-3">
                            <label className="form-label">Tên sản phẩm</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={productInfo.values.name}
                                onChange={productInfo.handleChange}
                            />
                        </div>

                        {/* Price */}
                        <div className="mb-3">
                            <label className="form-label">Giá</label>
                            <input
                                type="number"
                                name="price"
                                className="form-control"
                                value={productInfo.values.price}
                                onChange={productInfo.handleChange}
                            />
                        </div>

                        {/* Quantity */}
                        <div className="mb-3">
                            <label className="form-label">Số lượng</label>
                            <input
                                type="number"
                                name="quantity"
                                className="form-control"
                                value={productInfo.values.quantity}
                                onChange={productInfo.handleChange}
                            />
                        </div>

                        {/* Image Link */}
                        <div className="mb-3">
                            <label className="form-label">Link hình ảnh</label>
                            <input
                                type="text"
                                name="imgLink"
                                className="form-control"
                                value={productInfo.values.imgLink}
                                onChange={productInfo.handleChange}
                            />
                        </div>

                        {/* Short Description */}
                        <div className="mb-3">
                            <label className="form-label">Mô tả ngắn</label>
                            <input
                                type="text"
                                name="shortDescription"
                                className="form-control"
                                value={productInfo.values.shortDescription}
                                onChange={productInfo.handleChange}
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-3">
                            <label className="form-label">Mô tả chi tiết</label>
                            <textarea
                                name="description"
                                className="form-control"
                                rows="4"
                                value={productInfo.values.description}
                                onChange={productInfo.handleChange}
                            />
                        </div>

                        {/* Button */}
                        <div className="text-end">
                            <button type="submit" className="btn btn-success">
                                Thêm sản phẩm
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct
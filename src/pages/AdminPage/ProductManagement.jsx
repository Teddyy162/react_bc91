import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


//Quản lý tất cả sản phẩm ở giao diện chính (Cùng api với home)
const ProductManagement = () => {
  const [arrProduct, setArrProduct] = useState([]);

  //Call api product get all
  const getAllProductApi = async () => {
    try {
      const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product`);

      setArrProduct(res.data.content);
      console.log(res.data.content)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllProductApi();
  }, []);

  return (
    <div className='container'>
      <h3>Product management</h3>
      <NavLink to={'/admin/products/addNew'} className={'btn btn-success'}>Add new product</NavLink>
      <table className="table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Image</td>
            <td>Name</td>
            <td>Price</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {arrProduct.map((item) => {
            return <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.image} alt="..." width={50} height={50} />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <NavLink to={`/admin/products/edit/${item.id}`} className="btn btn-primary mx-2">Edit</NavLink>
                <button className="btn btn-danger" onClick={async (e) => {
                  try {
                    const kq = window.confirm('Bạn có muốn xóa không?');
                    if (kq) {

                      const res = await axios.delete(`https://apistore.cybersoft.edu.vn/api/Product/${item.id}`);
                      alert('Xóa thành công!')
                      //Sau khi xóa thành công thì gọi lại api getApi
                      getAllProductApi();
                    }
                  } catch (err) {
                    alert('Xóa thất bại!')
                  }
                }}>Delete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductManagement
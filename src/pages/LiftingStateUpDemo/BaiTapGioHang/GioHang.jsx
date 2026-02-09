import React from 'react'

const GioHang = (props) => {
    const { arrGH, xoaGioHang, capNhatSoLuong } = props;

    return (
        <div className='gio-hang'>
            <h3>Giỏ hàng</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá bán</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {arrGH.map((spGH, index) => {
                        return <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td><img width={50} src={spGH.hinhAnh} alt='...' /></td>
                            <th>{spGH.tenSP}</th>
                            <td>
                                <input onInput={(e)=>{
                                    capNhatSoLuong(e.target.value,spGH.maSP);
                                }} type='number' value={spGH.soLuong}></input>

                            </td>
                            <td>{spGH.giaBan.toLocaleString()}</td>
                            <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                            <td>
                                <button className='btn btn-danger' onClick={(e) => {
                                    xoaGioHang(spGH.maSP)
                                }}>Xoá</button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>

        </div>
    )
}

export default GioHang
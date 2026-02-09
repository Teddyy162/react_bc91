import React from 'react'
import SanPhamGH from './SanPhamGH'

const DanhSachSanPham = (props) => {
    const { mangSanPham, themGioHang } = props;
    return (
        <div>
            <h3>Danh sách sản phẩm</h3>
            <div className='row'>
                {mangSanPham.map((sanPham, index) => {
                    return <div className='col-md-4' key={index}>
                        <SanPhamGH dataSP={sanPham} themGioHang={themGioHang} />
                    </div>
                })}

            </div>
        </div>
    )
}

export default DanhSachSanPham
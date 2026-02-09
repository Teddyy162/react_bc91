import React from 'react'

const SanPhamGH = (props) => {
    const {dataSP,themGioHang} = props
  return (
    <div className='card'>
        <img src={dataSP.hinhAnh} alt='...' height={350} />
        <div className='card-body'>
            <h3 className='card-title'>{dataSP.tenSP}</h3>
            <p className='card-text badge bg-danger'>{dataSP.giaBan.toLocaleString()} VNĐ</p> <br/>
            <button className='btn btn-dark' onClick={(e)=>{
                themGioHang(dataSP);
            }}>
                Thêm giỏ hàng <i className='fa fa-cart-plus'></i>
            </button>
        </div>
    </div>
  )
}

export default SanPhamGH
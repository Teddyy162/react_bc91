import React, { useState } from 'react'
import GioHang from './GioHang';
import DanhSachSanPham from './DanhSachSanPham';
import lodash from 'lodash'

const mangSanPham = [
    { maSP: 1, tenSP: "VinSmart Live", manHinh: "AMOLED, 6.2, Full HD+", heDieuHanh: "Android 9.0 (Pie)", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 5700000, hinhAnh: "./img/vsphone.jpg" },
    { maSP: 2, tenSP: "Meizu 16Xs", manHinh: "AMOLED, FHD+ 2232 x 1080 pixels", heDieuHanh: "Android 9.0 (Pie); Flyme", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 7600000, hinhAnh: "./img/meizuphone.jpg" },
    { maSP: 3, tenSP: "Iphone XS Max", manHinh: "OLED, 6.5, 1242 x 2688 Pixels", heDieuHanh: "iOS 12", cameraTruoc: "7 MP", cameraSau: "Chính 12 MP & Phụ 12 MP", ram: "4 GB", rom: "64 GB", giaBan: 27000000, hinhAnh: "./img/applephone.jpg" }
];

const BaiTapGioHang = () => {
    const [arrGH, setArrGH] = useState([
        // { maSP: 3, tenSP: "Iphone XS Max", manHinh: "OLED, 6.5, 1242 x 2688 Pixels", heDieuHanh: "iOS 12", cameraTruoc: "7 MP", cameraSau: "Chính 12 MP & Phụ 12 MP", ram: "4 GB", rom: "64 GB", giaBan: 27000000, hinhAnh: "./img/applephone.jpg",soLuong:2 },
        //   { maSP: 2, tenSP: "Meizu 16Xs", manHinh: "AMOLED, FHD+ 2232 x 1080 pixels", heDieuHanh: "Android 9.0 (Pie); Flyme", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 7600000, hinhAnh: "./img/meizuphone.jpg",soLuong:2 }
    ]);
    //state component đặt tại đâu thì phương xử lý state sẽ định nghĩa tại đó
    const themGioHang = (spClick) => {
        let spGioHangClick = { ...spClick, soLuong: 1 };
        //xử lý setState thêm giỏ hàng tại đây
        // console.log('xử lý thêm giỏ hàng');
        // console.log(spGioHang);
        //Kiểm tra spClick có trong mảng giỏ hàng hay chưa
        let sp = arrGH.find(spGH => spGH.maSP == spGioHangClick.maSP);
        if (sp) {
            sp.soLuong += 1;
        } else {
            arrGH.push(spGioHangClick);
        }
        //cập nhật lại state
        setArrGH([...arrGH]);
        // console.log(arrGH)

    }

    const xoaGioHang = (maSPClick) => {
        console.log('xoá giỏ hàng');
        let arrGioHangNew = lodash.cloneDeep(arrGH); //Chép ra arrObject mới
        //Dựa vào mã sản phẩm click tìm và xoá trong giỏ hàng
        const indexDel = arrGioHangNew.findIndex(item => item.maSP === maSPClick);
        if (indexDel != -1) {
            arrGioHangNew.splice(indexDel, 1);
            //Cập nhật lại giỏ hàng
            setArrGH(arrGioHangNew);
        }

    }

    const capNhatSoLuong = (newValue, maSP) => {
        let arrGioHangNew = lodash.cloneDeep(arrGH); //Chép ra object mới
        let spUpdate = arrGioHangNew.find(item => item.maSP == maSP);
        if (spUpdate && newValue > 0) {
            spUpdate.soLuong = newValue;
            setArrGH(arrGioHangNew);
        }
    }

    return (
        <div className='container'>
            <h3 className='text-center'>Bài tập giỏ hàng</h3>
            <GioHang arrGH={arrGH} xoaGioHang={xoaGioHang} capNhatSoLuong={capNhatSoLuong} />

            <DanhSachSanPham mangSanPham={mangSanPham} themGioHang={themGioHang} />
        </div>
    )
}

export default BaiTapGioHang
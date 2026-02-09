import React, { useState } from 'react'
import PhoneItem from './PhoneItem'

const dataPhone =
    [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]


//props: truyền được: string, bool, number, object, array, jsx, function 


const LiftingStateUpDemo = () => {
    //state là 1 object phone
    const [phoneDetail, setPhoneDetail] = useState({ "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" })


    return (
        <div className='container'>
            <h3>Bài tập xem chi tiết sản phẩm</h3>
            <div className='row'>
                {dataPhone.map((phone, index) => {
                    return <div className='col-md-4' key={phone.maSP}>
                        <PhoneItem phone={phone} handleSetStatePhoneDetail={setPhoneDetail} />
                    </div>
                })}


            </div>
            <hr />
            <div className='mt-2'>
                <h3>Chi tiết sản phẩm</h3>
                <div className='row'>
                    <div className='col-md-4'>
                        <h3>{phoneDetail.tenSP}</h3>
                        <img src={phoneDetail.hinhAnh} alt='...' height={350} />
                    </div>
                    <div className='col-md-8'>
                        <h3>Thông số kỹ thuật</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{phoneDetail.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{phoneDetail.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{phoneDetail.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{phoneDetail.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>{phoneDetail.ram}</td>
                                </tr>
                                <tr>
                                    <td>Rom</td>
                                    <td>{phoneDetail.rom}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LiftingStateUpDemo





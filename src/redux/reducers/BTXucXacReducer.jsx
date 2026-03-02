import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrXucXac: [
        { diem: 1, srcImg: '/img/gameXucXac/1.png' },
        { diem: 1, srcImg: '/img/gameXucXac/1.png' },
        { diem: 1, srcImg: '/img/gameXucXac/1.png' },
    ],
    banChon: 'tai',
    soBanThang: 0,
    soBanThua: 0,
    tongBanCuoc: 0
}

const BTXucXacReducer = createSlice({
    name: 'BTXucXacReducer',
    initialState,
    reducers: {
        
    }
});

export const { } = BTXucXacReducer.actions

export default BTXucXacReducer.reducer
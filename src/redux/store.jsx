import { configureStore } from '@reduxjs/toolkit';
/*
    reducer: là hàm trả về state, khi state thay đổi thì component nào follow từ state sẽ tự động chạy lại (render lại). Hàm này sẽ được kích hoạt khi ứng dụng khởi tạo và mỗi lần gửi dữ liệu lên
*/

export const store = configureStore({
    reducer: {
        //Nơi chứa toàn bộ state của ứng dụng
        numberReducer: (stateNumber = 10, action) => {
            console.log('numberReducer', action)

            if (action.type == 'CHANGE_NUMBER_ACTION') {
                stateNumber = stateNumber + action.payload;
            }

            return stateNumber; //imutable (tính bất biến của redux) shallow compare (so sánh địa chỉ ô nhớ .
        },
        abcReducer: (state = 'string', action) => {
            console.log('abcReducer', action)

            return state;
        },
        imgCarReducer: (state = '/img/products/black-car.jpg') => {
            return state;
        }

    }
})
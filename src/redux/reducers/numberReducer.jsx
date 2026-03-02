




export const numberReducer = (stateNumber = 10, action) => {
    console.log('numberReducer', action)

    if (action.type == 'CHANGE_NUMBER_ACTION') {
        stateNumber = stateNumber + action.payload;
    }

    return stateNumber; //imutable (tính bất biến của redux) shallow compare (so sánh địa chỉ ô nhớ .
}
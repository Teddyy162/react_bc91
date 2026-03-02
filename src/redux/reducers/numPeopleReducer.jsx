//rxreducer
const initialState = Math.floor(Math.random() * 99)

export const numberPeopleReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'RANDOM_PEOPLE_NUMBER': {
            //Tạo số ngẫu nhiên 
            let numRandom = Math.floor(Math.random() * 99) + 1;  //Trả từ 0 đến 98 => + 1
            state = numRandom;
        }; break;

        default:
            return state
    }
    return state;
}

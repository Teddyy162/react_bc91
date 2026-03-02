export const imgCarReducer = (state = '/img/products/black-car.jpg', action) => {
    switch (action.type) {
        case 'CHANGE_CAR_COLOR': {
            state = `/img/products/${action.payload}-car.jpg`;

        }; break;
    }
    return state;
}


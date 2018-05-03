import { UPDATE_PRODUCT, RESET_PRODUCT } from '../actionTypes/ProductActionType';

// initial reducer state
const initialState = {
    id: 0,
    name: '',
    url: '',
    description: '',
    images: [],
    createdDate: '',
    productType: '',
};

// default reducer function
export default function ProductReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PRODUCT:
            return Object.assign({}, state, action.payload);
        case RESET_PRODUCT:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}
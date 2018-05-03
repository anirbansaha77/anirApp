import { UPDATE_PRODUCT, RESET_PRODUCT } from '../actionTypes/ProductActionType';

export function UpdateProduct(payload) {
    return { type: UPDATE_PRODUCT, payload };
}

export function ResetProduct(payload) {
    return { type: RESET_PRODUCT, payload };
}

import { call, put } from "redux-saga/effects";
import { getProduct } from "../../products/api/api";
import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "../../products/action/action";

export function* handleGetProduct(action) {
    try {
        const res = yield call(getProduct, action);
        const status = res.status;
        const data = res.data;
        if (status === 200) {
            yield put({ type: GET_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: GET_PRODUCT_ERROR, data });
        }
    } catch (e) {
        yield put({ type: GET_PRODUCT_ERROR, e });
    }
}
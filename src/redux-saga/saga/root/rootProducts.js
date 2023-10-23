import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_PROGRESS } from "../../products/action/action";
import { handleGetProduct } from "../manageproduct/manageProduct";

// GET category data
export function* getCategoySaga() {
    yield takeLatest(GET_PRODUCT_PROGRESS, handleGetProduct);
}

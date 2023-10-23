import { all } from "@redux-saga/core/effects";
import { getCategoySaga } from "./root/rootProducts";

export function* rootSaga() {
    yield all([getCategoySaga()]);
  }
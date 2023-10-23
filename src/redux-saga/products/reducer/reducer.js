/* eslint-disable default-case */
import { GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS } from "../action/action"

const initialState = {
    product: [],

    getProductProgress: false,
    getProductError: null,
    dataIsLoaded: false
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_PROGRESS: {
            return ({
                ...state,
                getProductProgress: true,
                getProductError: null,
                dataIsLoaded: false
            })
        }
        case GET_PRODUCT_SUCCESS: {
            return ({
                ...state,
                getProductProgress: false,
                getProductError: null,
                product: action.data,
                dataIsLoaded: true
            })
        }
        case GET_PRODUCT_ERROR: {
            return ({
                ...state,
                getProductProgress: false,
                getProductError:  action.data, 
                dataIsLoaded: false
            })
        }
        default :  return state
    }
}

export default productReducer;
import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { GET_PRODUCT_PROGRESS } from '../redux-saga/products/action/action';


function Data() {


    const dispatch = useDispatch()
    const data = useSelector(state=>state.productReducer)
    console.log(data,'from data com');


    useEffect(()=>{
        dispatch({type:GET_PRODUCT_PROGRESS})
    },[])

    
  return (
    <div>{
      data.product.map((e,ind)=>{
        return (
        <>
        <h1 key={ind}>{e.id}</h1>
        <h1>{e.title}</h1>
        <h1>{e.author}</h1>
        </>

        
        )
      })
      }</div>
  )
}

export default Data
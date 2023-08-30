import React from 'react'
import { ProductType } from '../context/ProductProvider'
import { ReducerActionType, ReducerAction } from '../context/CartProvider'
import { ReactElement } from "react"

type PropsType = {
  product: ProductType
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType
  inCart: boolean
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {

  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
  console.log(img)

  return (
    <div>Product</div>
  )
}

export default Product
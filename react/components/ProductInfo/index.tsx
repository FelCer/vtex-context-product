import React from 'react'
import { useProduct } from 'vtex.product-context'
import { ProductContextState } from 'vtex.product-context/react/ProductTypes'
import { FormattedPrice } from 'vtex.formatted-price'
import { Button } from 'vtex.styleguide'
import { useProductSummaryDispatch } from 'vtex.product-summary-context/ProductSummaryContext'

import usePrice from './usePrice'

const ProductInfo = () => {
  const { product, selectedItem } = useProduct() as ProductContextState
  const price = usePrice(selectedItem)
  const dispatch = useProductSummaryDispatch()

  const handleOnClick = (e: any) => {
    e.preventDefault()
    e.stopPropagation()

    dispatch({
      type: 'SET_PRODUCT_QUERY',
      args: {
        query: 'name=value',
      },
    })
  }

  return (
    <div>
      <p>Brand: {product?.brand}</p>
      <p>Name: {product?.productName}</p>
      <p>Name SKU selected: {selectedItem?.name}</p>
      {price ? (
        <p>
          Price: <FormattedPrice value={price} />
        </p>
      ) : null}

      <Button onClick={handleOnClick}>Change URL</Button>
    </div>
  )
}

export default ProductInfo
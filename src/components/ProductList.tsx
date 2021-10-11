import React from 'react';


type ProductProps = {
    product: ProductT
}

function Product({ product }: ProductProps){
    return (
      <li>
        <h3>{product.name}</h3>
        <span>{product.price}</span>
      </li>
    )
}

type ProductListProps = {
  productList: ProductT[]
}

export default function ProductList({ productList }: ProductListProps){
  return (
    <>
      <h2>상품 리스트</h2>
      <ul id="product-list">
        {productList.map(product => <Product product={product} key={product.productName}/>)}
      </ul>
    </>
  );
}
import React from 'react';
import productListAtom, {useProductListAtom} from '../state/productListState';

type ProductProps = {
    product: ProductT
}

function Product({ product }: ProductProps){
    const { deleteProduct } = useProductListAtom(productListAtom);

    return (
      <li>
        <h3>{product.id} {product.productName}</h3>
        <span>{product.priceWon}</span>
        <button
          className="delete-product-button"
          onClick={(e)=>{deleteProduct(product.id)}}>삭제</button>
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

import React from 'react';
import productListAtom, {useProductListAtom} from '../state/productListState';

type ProductProps = {
    product: ProductT
}

function Product({ product }: ProductProps){
    const { deleteProduct } = useProductListAtom(productListAtom);

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>)=>{

      const result = window.confirm('삭제하시겠습니까?');
      if (result){
        deleteProduct(product.id)
      }
    };

    return (
      <li className="border- border-b-2 border-indigo-600 m-2 mb-4">
        <h3>{product.productName}</h3>
        <span className="font-bold">{product.priceWon}원</span>
        <br />
        <button
          className="delete-product-button"
          onClick={handleDelete}>
          삭제
        </button>
      </li>
    )
}

type ProductListProps = {
  productList: ProductT[]
}

export default function ProductList({ productList }: ProductListProps){
  return (
    <>
      <h2 className="group relative w-64 flex justify-center py-2 px-4 border border-transparent text-2xl rounded-md text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">상품 리스트</h2>
      <ul id="product-list">
        {productList.map(product => <Product product={product} key={product.productName}/>)}
      </ul>
    </>
  );
}

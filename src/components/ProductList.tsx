import React from "react";
import productListAtom, { useProductListAtom } from "../state/productListState";

type ProductProps = {
  product: ProductT;
};

function Product({ product }: ProductProps) {
  const { deleteProduct } = useProductListAtom(productListAtom);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = window.confirm("삭제하시겠습니까?");
    if (result) {
      deleteProduct(product.id);
    }
  };

  return (
    <li className="border-b-2 border-indigo-600 m-2 mb-4">
      <a href={product.productLink} target="_blank">
        <img className="h-32" src={product.imageLink} />
        <h3>{product.productName}</h3>
      </a>
      <span className="font-bold">{product.priceWon}원</span>
      <br />
      <button
        className="transition-colors duration-200 delete-product-button w-12 flex justify-center py-1 px-2 m-1 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
        onClick={handleDelete}
      >
        삭제
      </button>
    </li>
  );
}

type ProductListProps = {
  productList: ProductT[];
};

export default function ProductList({ productList }: ProductListProps) {
  return (
    <>
      <h2 className="text-2xl text-indigo-600">상품 리스트</h2>
      <ul id="product-list">
        {productList.map((product) => (
          <Product product={product} key={product.productName} />
        ))}
      </ul>
    </>
  );
}

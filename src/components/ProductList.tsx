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
      <span className="font-bold text-sm max-w-max flex items-center justify-between py-0.5 px-3 rounded-full bg-indigo-100 last:mr-0 mr-1 transition-all duration-300 text-indigo-600">
        {product.category}
      </span>
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
      <ul id="product-list">
        {productList.map((product) => (
          <Product product={product} key={product.productName} />
        ))}
      </ul>
    </>
  );
}

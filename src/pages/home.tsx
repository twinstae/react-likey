import React from "react";
import Usage from "../components/Usage";
import ProductList from "../components/ProductList";
import AddProductSheet from "../components/AddProductSheet";
import { Toaster } from "react-hot-toast";
import useClipBoardToast from "../state/useClipBoardToast";
import useProductListBackUp from "../state/useProductListBackUp";

export default function Home() {
  const { productList } = useProductListBackUp();

  const { open } = useClipBoardToast();

  return (
    <>
      <div
        data-testid="home"
        className="w-full max-w-lg mx-auto mb-16 p-2 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      >
        {productList.length === 0 ? (
          <Usage />
        ) : (
          <ProductList productList={productList} />
        )}

        <AddProductSheet />
      </div>
      <button
        id="add-product-link"
        className="fixed bottom-0 right-8 flex justify-center py-2 px-4 mb-4 border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
        onClick={(e) => {
          navigator.clipboard.readText().then(open);
        }}
      >
        저장하기
      </button>

      <Toaster />
    </>
  );
}

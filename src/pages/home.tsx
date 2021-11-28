import React from "react";
import Usage from '../components/Usage';
import ProductList from '../components/ProductList';
import AddProductSheet from '../components/AddProductSheet';
import { Toaster } from "react-hot-toast";
import useClipBoardToast from "../state/useClipBoardToast";
import useProductListBackUp from "../state/useProductListBackup";

export default function Home(){
  const {productList} = useProductListBackUp();

  const { open } = useClipBoardToast();

  return (
    <div data-testid="home" className="w-64 m-2 p-4 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      {productList.length === 0
        ? <Usage />
        : <ProductList productList={productList}/>}
      <button id="add-product-link"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={(e)=>{ navigator.clipboard.readText().then(open);}}>
        저장하기
      </button>
      <AddProductSheet />
      <Toaster />
    </div>
  )
}
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
    <div data-testid="home">
      {productList.length === 0
        ? <Usage />
        : <ProductList productList={productList}/>}
      <button id="add-product-link"
        className="text-4xl rounded p-2 border-black border-2"
        onClick={(e)=>{ navigator.clipboard.readText().then(open);}}>
        저장하기
      </button>
      <AddProductSheet />
      <Toaster />
    </div>
  )
}
import React, { useEffect, useState } from "react";
import Usage from '../components/Usage';
import ProductList from '../components/ProductList';
import productListAtom from '../state/productListState';
import AddProductSheet from '../components/AddProductSheet';

import { useAtom } from 'jotai';
import { useBottomSheetAtom } from "../state/bottomSheetAtomState";
import createLocalStorageRepository from "../repository/localStorageRepository";
import toast, { Toaster } from "react-hot-toast";


function useClipBoardToast(){
  const [clipBoardText, setClipBoardText] = useState("")

  useEffect(() => { 
    if (clipBoardText !== ""){
      toast(clipBoardText);
    }
  }, [clipBoardText])

  useEffect(() =>{
    const interval = setInterval(()=> navigator.clipboard.readText().then(setClipBoardText), 3 * 1000) // 3초마다 확인
    return () => clearInterval(interval);
  }, [])

  return { clipBoardText, setClipBoardText };
}




export default function Home(){
  const [productList, setProductList] = useAtom(productListAtom);

  const {loadAllProduct, saveAllProduct} = createLocalStorageRepository();

  useEffect(()=>{
    const savedProductList = loadAllProduct();

    if(savedProductList !== null){
      setProductList(_ => savedProductList);
    }
  }, [])
  
  useEffect(() => { saveAllProduct(productList) }, [productList])

  const {open} = useBottomSheetAtom();

  const { setClipBoardText }  = useClipBoardToast();

  return (
    <div data-testid="home">
      {productList.length === 0 ? <Usage /> : <ProductList productList={productList}/>}
      <button id="add-product-link" onClick={(e)=>{
        navigator.clipboard.readText().then(text => {
          setClipBoardText(text);
          open(text);
        });
      }}>저장하기</button>
      <AddProductSheet />
      <Toaster />
    </div>
  )
}
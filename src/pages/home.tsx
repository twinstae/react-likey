import React, { useEffect, useState } from "react";
import Usage from '../components/Usage';
import ProductList from '../components/ProductList';
import productListAtom from '../state/productListState';
import AddProductSheet from '../components/AddProductSheet';

import { useAtom } from 'jotai';
import bottomSheetAtom, { useBottomSheetAtom } from "../state/bottomSheetAtomState";
import createLocalStorageRepository from "../repository/localStorageRepository";



export default function Home(){
  
  const [productList, setProductList] = useAtom(productListAtom);
  
  const {loadAllProduct, saveAllProduct} = createLocalStorageRepository();
  useEffect(()=>{
    const savedProductList = loadAllProduct();

    if(savedProductList){
      setProductList(savedProductList);
    }
  }, [])
  
  useEffect(() => saveAllProduct(productList), [productList])

  const {open} = useBottomSheetAtom(bottomSheetAtom);

  return (
    <div data-testid="home">
      {productList.length === 0 ? <Usage /> : <ProductList productList={productList}/>}
      <button id="add-product-link" onClick={open}>저장하기</button>
      <AddProductSheet />
    </div>
  )
}
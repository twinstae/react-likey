import React, { useEffect, useState } from "react";
import Usage from '../components/Usage';
import ProductList from '../components/ProductList';
import productListAtom from '../state/productListState';
import AddProductSheet from '../components/AddProductSheet';
import { PRODUCT_LIST_KEY } from '../constants';
import { useAtom } from 'jotai';

export default function Home(){
  
  const [productList, setProductList] = useAtom(productListAtom);
  
  useEffect(()=>{
    const save = localStorage.getItem(PRODUCT_LIST_KEY);
  
    if(save){
      const savedProductList = JSON.parse(save);
      setProductList(savedProductList);
    }
  }, [])
  
  useEffect(() => {
    console.log( JSON.stringify(productList));
    localStorage.setItem(PRODUCT_LIST_KEY, JSON.stringify(productList));
  }, [productList])

  const [open, setOpen] = useState(false)

  function onDismiss() {
    setOpen(false)
  }

  return (
    <div data-testid="home">
      {productList.length === 0 ? <Usage /> : <ProductList productList={productList}/>}
      <button id="add-product-link" onClick={()=>setOpen(true)}>저장하기</button>
      <AddProductSheet open={open} onDismiss={onDismiss}/>
    </div>
  )
}
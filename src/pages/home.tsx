import React, { useState } from "react";
import Usage from '../components/Usage';
import ProductList from '../components/ProductList';
import productListAtom, {useProductListAtom} from '../state/productListState';
import AddProductSheet from '../components/AddProductSheet';

export default function Home(){
  const { productList } = useProductListAtom(productListAtom);

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
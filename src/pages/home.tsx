import React, { useState } from 'react';
import Usage from '../components/Usage';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';
import useProductListAtom from '../state/productListState';

export default function Home(){
  const { productList } = useProductListAtom();

  return (
    <div data-testid="home">
      {productList.length === 0 ? <Usage /> : <ProductList productList={productList}/>}
      <Link to="/add">저장하기</Link>
    </div>
  )
}

// https://typescript-kr.github.io/pages/declaration-files/creating-dts-files-from-js.html

import React from 'react';
import Usage from '../components/Usage';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';
import productListAtom, {useProductListAtom} from '../state/productListState';

export default function Home(){
  const { productList } = useProductListAtom(productListAtom);

  return (
    <div data-testid="home">
      {productList.length === 0 ? <Usage /> : <ProductList productList={productList}/>}
      <Link to="/add">저장하기</Link>
    </div>
  )
}

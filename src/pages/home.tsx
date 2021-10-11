import React, { useState } from 'react';
import Usage from '../components/Usage';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';

export default function Home(){
  const [productList, setProductList] = useState<ProductT[]>([]);

    /*
  function addProduct(e: React.MouseEvent){
    
    setProductList(old => [...old, {
        image: "이미지",
        link: "이미지",
        name: "제주 삼다수",
        price: 5000,
      }])
      <button onClick={addProduct}>저장하기</button>
  }
  */

  return (
    <div data-testid="home">
      {productList.length === 0 ? <Usage /> : <ProductList productList={productList}/>}
      <Link to="/add">저장하기</Link>
    </div>
  )
}

// https://typescript-kr.github.io/pages/declaration-files/creating-dts-files-from-js.html
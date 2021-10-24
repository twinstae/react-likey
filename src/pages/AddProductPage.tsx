import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import productListAtom, { useProductListAtom } from '../state/productListState';

interface inputWithLabelProps {
  id: string;
  text: string;
  registerInput: unknown;
}

function InputWithLabel({id, text, registerInput}: inputWithLabelProps){
  return (
    <label htmlFor={id}>
      {text}
      <input id={id} {...registerInput} />
    </label>
  );
}


export default function AddProductPage(){ 
    /*
    이미지 링크 (수정 불가)
    상품 링크 (수정 불가)
    상품 이름 (required)
    가격과 단위 (required)
    카테고리 선택 (전체가 기본)
    */
    const { register, handleSubmit } = useForm({
        defaultValues: {
          product: {
            imageLink: '',
            productLink: '',
            productName: '',
            priceWon: 0,
            category: 'all',
          },
        },
    });

    const { addProduct } = useProductListAtom(productListAtom);

    const history = useHistory();
    const onSubmit = (data: { product: ProductT } ) => {
      addProduct(data.product);
      history.push('/');      
    };

    return (
      <div data-testid="add-product-page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWithLabel id="image-link-input" text="이미지 링크" registerInput={register('product.imageLink')} />
          <InputWithLabel id="product-link-input" text="상품 링크" registerInput={register('product.productLink')} />
          <InputWithLabel id="product-name-input" text="상품 이름" registerInput={register('product.productName')} />
          <InputWithLabel id="price-won-input" text="가격(원)" registerInput={register('product.priceWon')} />
          <InputWithLabel id="category-input" text="카테고리" registerInput={register('product.category')} />
          <button id="add-product-button" type="submit">상품 추가</button>
        </form>
        <Link to="/">돌아가기</Link>
      </div>
    )
  }

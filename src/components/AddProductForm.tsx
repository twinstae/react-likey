import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
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


export default function AddProductForm({dismiss} : {dismiss: ()=>void}){ 
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
            id: Math.random(),
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
      
      dismiss();
    };

    return (
      <div data-testid="add-product-page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWithLabel id="image-link-input" text="이미지 링크" registerInput={register('product.imageLink')} />
          <InputWithLabel id="product-link-input" text="상품 링크" registerInput={register('product.productLink', { required: true })} />
          <InputWithLabel id="product-name-input" text="상품 이름" registerInput={register('product.productName', { required: true })} />
          <InputWithLabel id="price-won-input" text="가격(원)" registerInput={register('product.priceWon', { required: true })} />
          <InputWithLabel id="category-input" text="카테고리" registerInput={register('product.category')} />
          <button id="add-product-button" type="submit">상품 추가</button>
        </form>
      </div>
    )
  }
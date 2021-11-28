import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';
import { useBottomSheetAtom } from '../state/bottomSheetAtomState';
import productListAtom, { useProductListAtom } from '../state/productListState';
import { getProductFromOGUrl } from '../api';

interface inputWithLabelProps {
  id: string;
  text: string;
  registerInput: unknown;
}

function InputWithLabel({id, text, registerInput}: inputWithLabelProps){
  return (
    <label htmlFor={id}>
      {text}
      <input className="transition-colors duration-500 border-b-2 border-gray-300 w-full text-gray-800 leading-normal shadow-none outline-none focus:outline-none focus:ring-0 focus:text-gray-800 focus:border-indigo-300 px-0 mb-2 bg-transparent" id={id} {...registerInput} />
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
    const { register, handleSubmit, setValue, watch } = useForm({
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

    const {productLink} = useBottomSheetAtom();

    useEffect(()=>{
      if(productLink){
        setValue('product.productLink', productLink, { shouldValidate: true })

        getProductFromOGUrl(productLink) // {title: "..."}
          .then(({title, image}) => {
            setValue('product.productName', title, { shouldValidate: true })
            setValue('product.imageLink', image, { shouldValidate: true })
          })
      }
    }, [productLink])

    const { addProduct } = useProductListAtom(productListAtom);

    // const history = useHistory();
    const onSubmit = (data: { product: ProductT } ) => {
      addProduct(data.product);
      dismiss();
    };

    const imageLink = watch("product.imageLink");

    return (
      <div data-testid="add-product-page">
        <form className="p-4"
          onSubmit={handleSubmit(onSubmit)}>
          {imageLink && <img src={imageLink}/>}
          <InputWithLabel id="image-link-input" text="이미지 링크" registerInput={register('product.imageLink')} />
          <InputWithLabel id="product-link-input" text="상품 링크" registerInput={register('product.productLink', { required: true })} />
          <InputWithLabel id="product-name-input" text="상품 이름" registerInput={register('product.productName', { required: true })} />
          <InputWithLabel id="price-won-input" text="가격(원)" registerInput={register('product.priceWon', { required: true })} />
          <InputWithLabel id="category-input" text="카테고리" registerInput={register('product.category')} />

          <button id="add-product-button" type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            상품 추가
          </button>
        </form>
      </div>
    )
  }
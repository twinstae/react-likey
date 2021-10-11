import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
/*
{
    imageLink: '',
    productLink: '',
    productName: '',
    priceWon: 0,
    category: 'all',
}
*/

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
            
    const onSubmit = (data: any) => console.log(data);

    return (
      <div data-testid="add-product-page">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                이미지 링크
                <input {...register('product.imageLink')} />
            </label>
            <label>
                상품 링크
                <input {...register('product.productLink')} />
            </label>
            <label>
                상품 이름
                <input {...register('product.productName')} />
            </label>
            <label>
                가격(원)
                <input {...register('product.priceWon')} />
            </label>
            <label>
                카테고리
                <input {...register('product.category')} />
            </label>
            <button type="submit">상품 추가</button>
        </form>
        <Link to="/">돌아가기</Link>
      </div>
    )
  }